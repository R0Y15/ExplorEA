import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SmallNav = ({ setIsModalOpen }) => {
  return (
    <div className="absolute right-3 z-10 mt-2 w-48 top-1.5 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <div className="relative">
          <Image
            src={'/close.svg'}
            width={30}
            height={30}
            alt='close-btn'
            className='top-0 start-0'
            onClick={() => setIsModalOpen(false)}
          />
        </div>

        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.href} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5'>
            {link.label}
          </Link>
        ))}

      </div>
    </div>
  )
}

export default SmallNav