"use client";

import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, SmallNav } from '.'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <nav className="relative flexBetween max-container padding-container z-30 py-5">
      <Link href="/">
        <Image src={'/logo.png'} width={80} height={50} alt='nav-logo' />
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.href} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
            {link.label}
          </Link>
        ))}
      </ul>

      <div className='hidden lg:flexCenter'>
        <Button
          type='button'
          label='Sign In'
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div>

      {!isModalOpen &&
        <Image
          src={'/menu.svg'}
          alt='menu-icon'
          width={30}
          height={30}
          className='inline-block lg:hidden cursor-pointer'
          onClick={openModal}
        />
      }
      {isModalOpen && <SmallNav setIsModalOpen={setIsModalOpen} />}

    </nav>
  )
}

export default Navbar