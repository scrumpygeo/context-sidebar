import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './linkdata'

const Sidebar = () => {
  return (
    <aside className="show-sidebar sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="nasa-logo" className='logo' />
        <button className="close-btn" ><FaTimes /></button>
      </div>
      Sidebar
    </aside>
  )
}

export default Sidebar