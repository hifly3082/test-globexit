import { useState, useEffect } from 'react'
import { User } from '../../types'

const BASE_URL = 'http://127.0.0.1:3000/'
export interface UserData {
  users: User[]
}

export function useUsers(query: string): UserData {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + (query ? `?term=${query}` : ''))

        if (!response.ok) {
          throw new Error('Something went wrong with fetching data')
        }

        const data = await response.json()

        if (data.Response === 'False') throw new Error('Users not found')

        setUsers(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [query])

  return { users }
}
