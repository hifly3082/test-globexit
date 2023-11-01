import './App.css';

import { useState } from 'react';
import { useUsers } from './components/hooks/useUsers';

import AppLayout from './components/AppLayout';
import Search from './components/Search';
import UserCardList from './components/UserCardList';
import UserCard from './components/UserCard';

function App() {
  const [query, setQuery] = useState('');
  const { users, isLoading, error } = useUsers();

  return (
    <AppLayout>
      <Search query={query} setQuery={setQuery} />
      <UserCardList users={users}>
        <UserCard />
      </UserCardList>
    </AppLayout>
  );
}

export default App;
