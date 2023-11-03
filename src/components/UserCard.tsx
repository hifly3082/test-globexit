import mobileIcon from '../assets/mobile.png'
import mailIcon from '../assets/mail.png'
import { User } from '../types'

export interface UserCardProps {
  user: User
  openModal: () => void
}

export const UserCard: React.FC<UserCardProps> = ({ user, openModal }) => {
  const { name, phone, email } = user

  return (
    <div className='user-card' onClick={openModal}>
      <h2>{name}</h2>
      <div className='user-info-item'>
        <span>
          <img src={mobileIcon} alt='mobile' />
        </span>
        <p>{phone}</p>
      </div>
      <div className='user-info-item'>
        <span>
          <img src={mailIcon} alt='mail' />
        </span>
        <p>{email}</p>
      </div>
    </div>
  )
}
