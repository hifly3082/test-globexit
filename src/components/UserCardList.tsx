import UserCard from './UserCard';
import { useUsers } from './hooks/useUsers';

export default function UserCardList() {
  const { users } = useUsers();

  return (
    <div className='card-list'>
      {users?.map((user) => (
        <UserCard user={user} key={user.name} />
      ))}
    </div>
  );
}
