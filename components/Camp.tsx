import { PEOPLE_URL } from '@/constants'
import { CampProps } from '@/utils'
import Image from 'next/image'
import React from 'react'

const CampSite = ({ backgroundImage, title, subtitle, poeple }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src={'/folded-map.svg'}
              alt='map'
              width={30}
              height={30}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className='bold-18 text-white'>
              {title}
            </h4>
            <p className='regular-14 text-white'>
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className='inline-block h-10 w-10 rounded-full '
                src={url}
                key={url}
                alt='people'
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className='bold-16 md:bold-20 text-white'>{poeple}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='relative 2xl:max-container fex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Trekking aati hai kya"
          subtitle="Chal Chal Ave"
          poeple="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Darbhanga Track"
          subtitle="Kya Krega Jaa kr"
          poeple="70+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="Darbhanga Track"
          subtitle="Kya Krega Jaa kr"
          poeple="70+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-4"
          title="Darbhanga Track"
          subtitle="Kya Krega Jaa kr"
          poeple="70+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-5"
          title="Darbhanga Track"
          subtitle="Kya Krega Jaa kr"
          poeple="70+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-6"
          title="Darbhanga Track"
          subtitle="Kya Krega Jaa kr"
          poeple="70+ Joined"
        />

      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="relative w-full overflow-hidden rounded-3xl bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20">
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong>Feeling Lost?</strong> to gand marao fir
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Shot Tae gM el Leo gee |e |
            new climbing location, the possibility of getting lost is
            very large. That's why we are here for those of you who
            want to start an adventure but are afraid of getting lost.
          </p>
          <Image
            src={'/quote.svg'}
            alt='quote'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  )
}

export default Camp