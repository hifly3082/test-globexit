import { useState } from 'react';

import AppLayout from './components/AppLayout';
import Search from './components/Search';
import UserCardList from './components/UserCardList';

import './App.css';

function App() {
  const [query, setQuery] = useState('');
  return (
    <AppLayout>
      <Search query={query} setQuery={setQuery} />
      <UserCardList />
    </AppLayout>
  );
}

export default App;
