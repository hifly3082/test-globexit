import closeIcon from '../assets/close.png'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return isOpen ? (
    <div className='modal-background' onClick={handleBackgroundClick}>
      <div className='modal'>
        <div className='modal-content'>
          {children}
          <button className='modal-close-button' onClick={onClose}>
            <img src={closeIcon} alt='close' />
          </button>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
