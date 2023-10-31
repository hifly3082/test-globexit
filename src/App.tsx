import './App.css';
import AppLayout from './components/AppLayout';

import SearchBar from './components/Search';
import UserCardList from './components/UserCardList';

function App() {
  return (
    <AppLayout>
      <SearchBar />
      <UserCardList />
    </AppLayout>
  );
}

export default App;
