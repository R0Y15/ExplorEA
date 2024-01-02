import Image from 'next/image'
import React from 'react'
import { Button } from '.'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className="hero-map" />

      <div className="relative flex flex-1 z-20 flex-col xl:w-1/2">
        <Image
          src={'/camp.svg'}
          alt='camp'
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-25px] w-10 lg:w-[50px]'
        />

        <h1 className='bold-52 lg:bold-88'>Sangla Valley Camping</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Sangla valley is an alluring valley in the Trans-Himalayan region and is a hotspot for tourists.
          It is a sought after place during the summers when the valley comes alive with tourists visiting from all parts of the world.
          Hidden away in the Himalayan region this is one picturesque valley which is untouched by the pollution of the big cities.
        </p>

        <div className="my-11 flex flex-wrap gp-5">
          <div className="flex items-center ">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src={'/star.svg'}
                key={index}
                alt='star'
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className='bolg-16 lg:bold-20 text-blue-70 ml-3'> 145k
            <span className='regular-16 lg:regular-20 ml-1.5'>Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type='button'
            label='Download App'
            variant='btn_green'
          />
          <Button
            type='button'
            label='How We Work?'
            variant='btn_white_text'
            icon='/play.svg'
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col ">
            <div className="flexBetween">
              <p className='regular-16 text-gray-20'>
                Location
              </p>
              <Image
                src={"/close-light.svg"}
                alt='close'
                width={32}
                height={32}
              />
            </div>
            <p className="bold-20 text-white">Sangla Valley</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className='regular-16 text-gray-20 block '>Distance</p>
              <p className='bold-20 text-white'>213.25 Km</p>
            </div>
            <div className="flex flex-col">
              <p className='regular-16 text-gray-20 block '>Elevation</p>
              <p className='bold-20 text-white'>8900 ft</p>
            </div>
          </div>

        </div>
      </div>
    </section >
  )
}

export default Hero