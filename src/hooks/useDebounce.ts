import { useState, useEffect } from 'react'

export function useDebounce<T>(query: T, delay = 300): T {
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [query, delay])

  return debouncedQuery
}
