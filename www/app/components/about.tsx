'use client'

import {AboutComponent} from "../data"
import ScrollIndicator, {Theme} from './ScrollIndicator'
import Teddy from "./Graphics/teddy"
import WaterMark, {Theme as WaterMarkTheme} from "./WaterMark"
import { useIntersection } from "./Mixins/useIntersection"
import {useRef, useState} from "react"
import FXText from "./Graphics/fx-text"

export default function About(props: AboutComponent) {
  const ref = useRef(null)
  const inViewport = useIntersection(ref, 0)
  const [loaded, setLoaded] = useState(false)
  const [split, setSplit] = useState(true)

  const onComplete = () => {
    setSplit(false)
  }

  if (inViewport && !loaded) {
    setLoaded(true)
  }

  return (
    <section className='relative z-10 m-0 p-0 w-screen h-screen bg-white text-gray-800 overflow-hidden'>
      <WaterMark className="absolute left-0 -top-16 scale-150" theme={WaterMarkTheme.Dark} context='about' />
      <div className='relative h-screen'>
        {/* content */}
        <div className='md:grid md:grid-cols-12'>
          <div className='z-10 col-start-3 col-span-4 h-screen flex p-12 md:p-0 justify-center items-center'>
            <div className='grid grid-row gap-6 text-gray-800'>
              <h2 className='text-4xl md:text-5xl font-bold bg-white'>{ props.title }</h2>
              <p ref={ref} className={'leading-relaxed transition-opacity duration-500 delay-500 bg-white tracking-wide opacity-' + (loaded ? '1' : '0')}>{ props.overview }</p>
              <FXText animate={loaded && split} onComplete={onComplete}>
                <h3 className={'transition-opacity duration-500 delay-1000 bg-white'}>{ props.sub_title }</h3>
              </FXText>
            </div>
          </div>
        </div>
        {/* graphic */}
        <div className='hidden md:block'>
          <Teddy />
        </div>
      </div>
        {/* scroll indicator */}
        <ScrollIndicator className='right-9 md:left-12' loaded={true} theme={Theme.Dark} />
    </section>
  )
}

