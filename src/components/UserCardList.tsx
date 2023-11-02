import UserCard from './UserCard';
import { useUsers } from './hooks/useUsers';

export default function UserCardList({ openModal }) {
  const { users } = useUsers();

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
  );
}
