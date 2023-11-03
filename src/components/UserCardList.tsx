import { User } from '../types'
import UserCard from './UserCard'

interface UserCardListProps {
  onOpenModal: (user: User) => void
  users: User[]
}

const UserCardList: React.FC<UserCardListProps> = ({ onOpenModal, users }) => {
  const handleOpenModal = (user: User) => () => {
    onOpenModal(user)
  }

  return (
    <div className='cardlist-container'>
      <div className='card-list'>
        {users?.map((user) => (
          <UserCard
            user={user}
            key={user.name}
            openModal={handleOpenModal(user)}
          />
        ))}
      </div>
    </div>
  )
}

export default UserCardList
