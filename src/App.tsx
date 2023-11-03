import './App.css'

import { useState } from 'react'

import { User } from './types'

import AppLayout from './components/AppLayout'
import Search from './components/Search'
import UserCardList from './components/UserCardList'
import Modal from './components/Modal'
import UserInfo from './components/UserInfo'

function App() {
  const [query, setQuery] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const handleOpenModal = (user: User) => {
    setSelectedUser(user)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setSelectedUser(null)
    setModalOpen(!isModalOpen)
  }

  return (
    <AppLayout>
      <Search query={query} setQuery={setQuery} />
      <UserCardList openModal={handleOpenModal} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedUser && <UserInfo user={selectedUser} />}
      </Modal>
    </AppLayout>
  )
}

export default App
