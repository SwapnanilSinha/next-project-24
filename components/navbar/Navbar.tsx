import React from 'react'
import NavSearch from './NavSearch'
import LinksDropdown from './LinksDropdown'
import DarkMode from './DarkMode'
import Logo from './Logo'
import '../../app/globals.css'

function Navbar() {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-6'>
        <div className='flex items-center gap-4'>
          <Logo />
          <h1 style={{
            fontSize: '1.6rem',
            fontFamily: 'var(--font-family)',
            color: 'var(--primary-color)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            fontWeight: 'bold',
          }}>
            Hotel Bookings
          </h1>
        </div>
        <NavSearch />
        <div className='flex gap-4 items-center'>
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
