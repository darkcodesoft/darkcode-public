'use client'

import slugify from 'slugify'
import {useEffect, useState} from 'react'

import {Device, deviceType} from '@/app/client'
import {WorkComponent} from '@/app/data'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import WaterMark from '@/app/components/WaterMark'
import WorkWeb from './web'
import WorkMobile from './mobile'

export default function Work (props: WorkComponent) {
  const projects = [props.project_1, props.project_2, props.project_3]
  const [sm, setSm] = useState(true)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const state = deviceType() === Device.MOBILE
    setSm(state)
    const t = setTimeout(() => {
      setLoaded(true)
    }, 60)
    return () => clearTimeout(t)
  }, [sm, loaded])

  return(
    <section className='overflow-hidden grid md:gap-16'>
      {projects.map((project, index) => (
      <div key={index} className={'relative py-0 z-0 gap-0 grid grid-cols-12 m-0 w-screen last:mb-20 md:last:mb-0' + (project.ios_app_url ? ' md:mb-10' : '')}>
        {/* water mark */}
        <WaterMark className={'absolute z-10 left-0 -top-28 scale-150 fill-white -rotate-45 hidden md:block md:delay-500 ' + (index % 2 ? ' right-0 left-auto' : '')}
          context={slugify(project.name)+'_project'}
          offset={index !== 0 ? -200 : 0}
          delay={index === 0 ? 0 : 500}
          animate={true}
        />
        {/* work item */}
        { project.ios_app_url ?
          <WorkMobile project={project} sm={sm} loaded={loaded} />
          :
          <WorkWeb project={project} sm={sm} loaded={loaded} />
        }
        {/* scroll indicator */}
        <ScrollIndicator className={'-ml-4 bottom-auto -mt-32 top-full md:ml-0 hidden md:block ' + (index % 2 ? 'right-1/2 md:right-12 -mr-2 md:mr-0' : 'left-1/2 md:left-12')}
          loaded={loaded}
        />
      </div>
      ))}
    </section>
  )
}
