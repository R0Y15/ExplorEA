import { FEATURES } from '@/constants'
import { FeatureItemProps } from '@/utils'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const Features = () => {

  const FeatureItem = ({ title, icon, variant, desc }: FeatureItemProps) => {
    return (
      <li className='flex w-full flex-1 flex-col items-start'>
        <div className='rounded-full p-4 lg:p-7 bg-green-50'>
          <Image
            src={icon}
            alt={title}
            width={28}
            height={28}
          />
        </div>
        <h2 className='bold-30 lg:bold-32 mt-5 capitalize'>
          {title}
        </h2>
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
          {desc}
        </p>
      </li>
    )
  }

  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className="max-container flex padding-container relative w-full justify-end">
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image
            src={'/phone.png'}
            alt='phone'
            width={440}
            height={1000}
            className='feature-phone'
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src={'camp.svg'}
              alt='camp'
              width={60}
              height={60}
              className='absolute top-[-20px] left-[50px] lg:top-[-20px] lg:left-[220px] w-10 lg:w-50px'
            />

            <h2 className='bold-40 lg:bold-64 text-center'>Our Features</h2>
          </div>

          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20 lg:ml-[100px]'>
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                variant={feature.variant}
                desc={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features