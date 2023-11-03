import { User } from '../types'
import { UserCard } from './UserCard'

interface UserCardListProps {
  openModal: (user: User) => void
  users: User[]
}

export const UserCardList: React.FC<UserCardListProps> = ({
  openModal,
  users
}) => {
  return (
    <div className='cardlist-container'>
      <div className='card-list'>
        {users?.map((user) => (
          <UserCard
            user={user}
            key={user.name}
            openModal={() => openModal(user)}
          />
        ))}
      </div>
    </div>
  )
}

export default UserCardList
