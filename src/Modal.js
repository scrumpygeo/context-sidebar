import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import { AppContext } from './context'
const Modal = () => {
  const { isModalOpen, closeModal } = useContext(AppContext)

  return (
    <div className={`${isModalOpen && 'show-modal'} modal-overlay `}>
      <div className="modal-container">
        <h3>Modal Content 🎈</h3>
        <button className="close-modal-btn" onClick={closeModal} ><FaTimes /></button>
      </div>
    </div>
  )
}

export default Modal