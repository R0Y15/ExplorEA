import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SmallNav = ({ setIsModalOpen }) => {
  return (
    <div className="absolute right-3 z-10 mt-2 w-48 top-1.5 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
      <div className="relative space-y-1 px-2 pb-5 pt-2">
        <Image
          src={'/close-dark.svg'}
          width={30}
          height={30}
          alt='close-btn'
          className='absolute left-[12px]'
          onClick={() => setIsModalOpen(false)}
        />
        <p className='absolute left-[50px]'>Close</p>
        <span className="relative seperator top-[30px] " />

        <div className='relative p-[10px] top-[30px]'>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.href} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5'>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SmallNav