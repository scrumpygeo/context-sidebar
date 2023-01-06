import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './linkdata'
import { useContext } from 'react'
import { AppContext } from './context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext)
  return (
    <aside className={`${isSidebarOpen ? 'show-sidebar' : ''} sidebar`}>
      <div className="sidebar-header">
        <img src={logo} alt="nasa-logo" className='logo' />
        <button className="close-btn" onClick={closeSidebar} ><FaTimes /></button>
      </div>

      <ul className="links">
        {links.map(link => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href={url}>{icon}{text}</a>
            </li>
          )
        })}
      </ul>

      <ul className="social-icons">
        {social.map(link => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar