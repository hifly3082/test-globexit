import { User } from '../types'
import { UserCard } from './UserCard'
import { useUsers } from './hooks/useUsers'

interface UserCardListProps {
  openModal: (user: User) => void
}
export const UserCardList: React.FC<UserCardListProps> = ({ openModal }) => {
  const { users } = useUsers()

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
