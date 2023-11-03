import { useState, useEffect } from 'react'
import { User } from '../types'

export interface UserData {
  users: User[]
}

const BASE_URL = 'http://127.0.0.1:3000/'

export function useUsers(query: string): UserData {
  const [users, setUsers] = useState([] as User[])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + (query && `?term=${query}`))

        if (!response.ok) {
          throw new Error('Something went wrong with fetching data')
        }

        const data = await response.json()

        setUsers(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [query])

  return { users }
}
