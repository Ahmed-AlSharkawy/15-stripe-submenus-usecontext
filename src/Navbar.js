import React from 'react'
import { useGlobalContext } from './context'
import sublinks from './data'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const { isSubMenueOpen, toggleSidebar, toggleSubMenue } = useGlobalContext()

  const openSubmenu = (e) => {
    const page = e.target.textContent
    const btnBound = e.target.getBoundingClientRect()
    const center = (btnBound.left + btnBound.right) / 2
    const bottom = btnBound.bottom - 3
    toggleSubMenue(page, { center, bottom })
  }

  const closeSubmenu = () => {
    if (isSubMenueOpen) {
      toggleSubMenue()
    }
  }
  const handleSubmenu = (e) => {
    if (isSubMenueOpen && !e.target.classList.contains('link-btn')) {
      toggleSubMenue()
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='Stripe' />
          <button className='btn toggle-btn' onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map((link, index) => {
            const { page } = link
            return (
              <li key={index}>
                <button
                  className='link-btn'
                  onMouseEnter={closeSubmenu}
                  onMouseOver={openSubmenu}
                >
                  {page}
                </button>
              </li>
            )
          })}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
