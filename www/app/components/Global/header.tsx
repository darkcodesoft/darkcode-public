'use client'

import {useEffect, useState} from 'react'

import Loader from '@/app/components/Loader'
import Logo from '@/app/components/Graphics/logo'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import WaterMark from "@/app/components/WaterMark"
import {HomeComponent} from '@/app/data'
import Message from './message'

export default function GlobalHeader(props: HomeComponent) {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setLoaded(true)
    }, 300)
    return () => clearTimeout(t)
  }, [loaded])

  return (
    <header className='relative m-0 p-0 w-screen h-screen overflow-hidden'>
      <WaterMark className="absolute -right-32 -top-16 scale-150" context='header' delay={0} />
      {/* fx container */}
      <div className='absolute top-0 right-0 bottom-0 left-0 truncate'>
        {/* label layer */}
        <div className='absolute left-0 top-0 right-0 bottom-0 z-30'>
          {/* top left layer: welcome label */}
          <div className={'absolute left-0 p-12 w-1/2 transition-opacity duration-500 delay-200 opacity-' + (loaded ? 1 : 0)}>
            <Message message={props.welcome_message} />
          </div>
          {/* splash logo text */}
          <Logo title={props.title} sub_title={props.sub_title} loaded={loaded} />
          {/* loader */}
          <Loader loaded={loaded} />
        </div>
        {/* scroll indicator */}
        <ScrollIndicator className='right-9 md:right-12' loaded={loaded} />
      </div>
    </header>
  )
}
