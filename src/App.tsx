import { useState, useEffect } from 'react';

import AppLayout from './components/AppLayout';
import Search from './components/Search';
import UserCardList from './components/UserCardList';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const BASE_URL = 'http://127.0.0.1:3000/';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error('Network error');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <AppLayout>
      <Search query={query} setQuery={setQuery} />
      <UserCardList>
        <UserCard />
      </UserCardList>
    </AppLayout>
  );
}

export default App;
