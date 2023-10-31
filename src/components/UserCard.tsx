import mobileIcon from '../assets/mobile.png';
import mailIcon from '../assets/mail.png';

export default function UserCard() {
  return (
    <>
      <li>
        <div className='user-card'>
          <h2>Евгения Савченко</h2>

          <div className='user-info-item'>
            <span>
              <img src={mobileIcon} alt='mobile' />
            </span>
            <p>+7 (918) 078-17-05</p>
          </div>
          <div className='user-info-item'>
            <span>
              <img src={mailIcon} alt='mail' />
            </span>
            <p>yysavchenk@mail.ru</p>
          </div>
        </div>
      </li>

      <li>
        <div className='user-card'>
          <h2>Евгения Савченко</h2>

          <div className='user-info-item'>
            <span>
              <img src={mobileIcon} alt='mobile' />
            </span>
            <p>+7 (918) 078-17-05</p>
          </div>
          <div className='user-info-item'>
            <span>
              <img src={mailIcon} alt='mail' />
            </span>
            <p>yysavchenk@mail.ru</p>
          </div>
        </div>
      </li>

      <li>
        <div className='user-card'>
          <h2>Евгения Савченко</h2>

          <div className='user-info-item'>
            <span>
              <img src={mobileIcon} alt='mobile' />
            </span>
            <p>+7 (918) 078-17-05</p>
          </div>
          <div className='user-info-item'>
            <span>
              <img src={mailIcon} alt='mail' />
            </span>
            <p>yysavchenk@mail.ru</p>
          </div>
        </div>
      </li>
      <li>
        <div className='user-card'>
          <h2>Евгения Савченко</h2>

          <div className='user-info-item'>
            <span>
              <img src={mobileIcon} alt='mobile' />
            </span>
            <p>+7 (918) 078-17-05</p>
          </div>
          <div className='user-info-item'>
            <span>
              <img src={mailIcon} alt='mail' />
            </span>
            <p>yysavchenk@mail.ru</p>
          </div>
        </div>
      </li>
    </>
  );
}
