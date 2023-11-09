import { useGetUsersByNameQuery } from '../api'
import { User } from '../types'
import UserCardList from './UserCardList'

interface UserCardListContainerProps {
  onOpenModal: (user: User) => void
  query: string
}

export const UserCardListContainer: React.FC<UserCardListContainerProps> = ({
  onOpenModal,
  query
}) => {
  const { data } = useGetUsersByNameQuery(query)

  return <UserCardList users={data} onOpenModal={onOpenModal} />
}
