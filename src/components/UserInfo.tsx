import { User } from '../types'

export interface UserInfoProps {
  user?: User
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const { name, phone, email, position_name, department, hire_date } =
    user || {}

  return user ? (
    <div className='user-info'>
      <h2>{name}</h2>
      <div className='user-info-table'>
        <div className='user-info-row'>
          <span>Телефон:</span>
          <p>{phone}</p>
        </div>
        <div className='user-info-row'>
          <span>Почта:</span>
          <p>{email}</p>
        </div>
        <div className='user-info-row'>
          <span>Дата приема:</span>
          <p>{hire_date}</p>
        </div>
        <div className='user-info-row'>
          <span>Должность:</span>
          <p>{position_name}</p>
        </div>
        <div className='user-info-row'>
          <span>Подразделение:</span>
          <p>{department}</p>
        </div>
      </div>

      <div className='user-info-row wide'>
        <span>Дополнительная информация:</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores
          corrupti inventore asperiores odio voluptate corporis fugiat, numquam
          itaque enim assumenda a earum facere quia aperiam magni sed et cum.
        </p>
      </div>
    </div>
  ) : (
    <div className='user-info'>
      <h2>User not found</h2>
    </div>
  )
}

export default UserInfo
