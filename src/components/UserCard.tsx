import mobileIcon from '../assets/mobile.png';
import mailIcon from '../assets/mail.png';

export default function UserCard({ user, openModal }) {
  const { name, phone, email } = user;

  const handleOpenModal = () => {
    openModal();
  };

  return (
    <div className='user-card' onClick={handleOpenModal}>
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
  );
}
