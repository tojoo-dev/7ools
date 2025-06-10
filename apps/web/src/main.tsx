import { createRoot } from 'react-dom/client'
import { Button } from '@7ools/ui/leaf/button'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu
} from '@7ools/ui/molecule/resizable-navbar'

import './style.css'

import { useState } from 'react'

const App = () => {
  const navItems = [
    {
      name: 'Features',
      link: '#features'
    },
    {
      name: 'Tools',
      link: '#tools'
    },
    {
      name: 'Contact',
      link: '#contact'
    }
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className='relative w-full'>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className='flex items-center gap-4'>
            <NavbarButton variant='secondary'>Search</NavbarButton>
            <NavbarButton variant='primary'>Get Started</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className='relative text-neutral-600 dark:text-neutral-300'
              >
                <span className='block'>{item.name}</span>
              </a>
            ))}
            <div className='flex w-full flex-col gap-4'>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant='primary'
                className='w-full'
              >
                Search
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant='primary'
                className='w-full'
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <div className="container mx-auto p-8 pt-24" style={{ height: "600vh" }}>
        <h1 className="mb-4 text-center text-3xl font-bold">
          Tools that developer looking for
        </h1>
      </div>
    </div>
  )
}

createRoot(document.getElementById('app')!).render(<App />)
