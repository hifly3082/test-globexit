import { useState } from 'react'

import { useDebounce } from './hooks'
import { UserCardListContainer } from './components/UsersCardListContainer'
import AppLayout from './components/AppLayout'
import Search from './components/Search'
import Modal from './components/Modal'
import UserInfo from './components/UserInfo'
import { User } from './types'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User>()
  const debouncedQuery = useDebounce(query)

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
      <UserCardListContainer
        onOpenModal={handleOpenModal}
        query={debouncedQuery}
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <UserInfo user={selectedUser} />
      </Modal>
    </AppLayout>
  )
}

export default App
