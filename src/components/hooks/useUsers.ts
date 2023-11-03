import { useState, useEffect } from 'react'
import { User } from '../../types'

const BASE_URL = 'http://127.0.0.1:3000/'
export interface UserData {
  users: User[]
  isLoading: boolean
  error: string
}

export function useUsers(query: string): UserData {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        setError('')

        const response = await fetch(BASE_URL + (query ? `?term=${query}` : ''))

        if (!response.ok) {
          throw new Error('Something went wrong with fetching data')
        }

        const data = await response.json()

        if (data.Response === 'False') throw new Error('Users not found')

        setUsers(data)
        setError('')
      } catch (error) {
        console.error('Error fetching data:', error)
        setError(error.message)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [query])

  return { users, isLoading, error }
}
