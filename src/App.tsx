import './App.css';

import { useState } from 'react';

import AppLayout from './components/AppLayout';
import Search from './components/Search';
import UserCardList from './components/UserCardList';
import Modal from './components/Modal';
import UserInfo from './components/UserInfo';

function App() {
  const [query, setQuery] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalOpen(!isModalOpen);
  };

  return (
    <AppLayout>
      <Search query={query} setQuery={setQuery} />
      <UserCardList openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <UserInfo user={selectedUser} />
      </Modal>
    </AppLayout>
  );
}

export default App;
