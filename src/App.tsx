import './App.css'

import { useState } from 'react'

import { User } from './types'

import AppLayout from './components/AppLayout'
import Search from './components/Search'
import UserCardList from './components/UserCardList'
import Modal from './components/Modal'
import UserInfo from './components/UserInfo'
import { useDebounce, useUsers } from './components/hooks'

function App() {
  const [query, setQuery] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User>()
  const debouncedQuery = useDebounce(query)
  const { users } = useUsers(debouncedQuery)

  const handleOpenModal = (user: User) => {
    setSelectedUser(user)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <AppLayout>
      <Search query={query} setQuery={setQuery} />
      <UserCardList openModal={handleOpenModal} users={users} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <UserInfo user={selectedUser} />
      </Modal>
    </AppLayout>
  )
}

export default App
