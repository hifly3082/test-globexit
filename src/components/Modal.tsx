import closeIcon from '../assets/close.png';

export default function Modal({ isOpen, onClose, children }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className='modal-background' onClick={handleBackgroundClick}>
      <div className='modal'>
        <div className='modal-content'>
          {children}
          <button className='modal-close-button' onClick={onClose}>
            <img src={closeIcon} alt='mobile' />
          </button>
        </div>
      </div>
    </div>
  );
}
