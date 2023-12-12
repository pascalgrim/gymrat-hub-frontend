"use client"
import { Menu, Sidebar, X } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import Sidenav from './Sidenav/Sidenav'
import SidenavList from './Sidenav/SidenavList'
import { routes } from '@/data/routes'
import SidenavItem from './Sidenav/SidenavItem'
import BurgerMenu from './BurgerMenu'

type TitleSectionProps = {
  title?: string,
  children?: React.ReactNode
}

function TitleSection({ title, children }: TitleSectionProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const menuIconStyle = 'block md:hidden cursor-pointer'
  function handleMenuClick() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <div className={cn('flex flex-col')}>
      <div className='flex justify-between items-center bg-background h-40 sticky top-0'>
        <div className='flex gap-4 items-center'>
          {menuIsOpen ? <X size={32} className={menuIconStyle} onClick={handleMenuClick} /> : <Menu size={32} className={menuIconStyle} onClick={handleMenuClick} />}
          <h1 className=''>{title}</h1>
        </div>
        <div>
          {children}
        </div>
      </div>
      {menuIsOpen &&
        <BurgerMenu />
      }
    </div>
  )

}

export default TitleSection