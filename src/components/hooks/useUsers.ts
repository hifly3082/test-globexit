import { useState, useEffect } from 'react';

const BASE_URL = 'http://127.0.0.1:3000/';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(BASE_URL);

        if (!response.ok) {
          throw new Error('Something went wrong with fetching data');
        }

        const data = await response.json();

        if (data.Response === 'False') throw new Error('Users not found');

        setUsers(data);
        setError('');
      } catch (error) {
        console.error('Error fetching data:', error);
        // setError(error.message);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return { users, isLoading, error };
}
