import './App.css';

import { useState } from 'react';

import AppLayout from './components/AppLayout';
import Search from './components/Search';
import UserCardList from './components/UserCardList';
import Modal from './components/Modal';

function App() {
  const [query, setQuery] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <AppLayout>
      <Search query={query} setQuery={setQuery} />
      <UserCardList openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </AppLayout>
  );
}

export default App;
