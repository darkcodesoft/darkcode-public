import Image from 'next/image';
import {useRef, useState} from "react";

import { useIntersection } from "@/app/components/Mixins/useIntersection"
import {Project} from "@/app/data";

interface Props {
  project: Project,
  className?: string,
  isMobile?: boolean
}

export default function CoverImage (props: Props) {
  const ref = useRef(null)
  const project = props.project
  const isMobile = props.isMobile
  const inViewport = useIntersection(ref, -50)
  const [loaded, setLoaded] = useState(false)

  if (inViewport && !loaded) {
    setLoaded(true)
  }

  return (
    <div ref={ref} className={props.className + ' transition duration-500 delay-500 relative  opacity-' + (loaded ? 1 : 0) + ' mt-' + (loaded ? 0 : 4)}>
      {/* frame */}
      <Image 
        className='absolute top-0 left-0 object-contain h-full w-full'
        src={'/images/' + (project.ios_app_url || isMobile ? 'iphone' : 'macbook') + '.png'}
        alt={project.name}
        width={project.ios_app_url || isMobile ? 768 : 1025}
        height={project.ios_app_url || isMobile ? 1572 : 619}
      />
      {/* image */}
      <Image 
        className='object-contain h-full w-full'
        src={'/images/projects/' + project.name.toLowerCase().replace(/ /g, '_') + (project.ios_app_url || isMobile ? '/mobile' : '/desktop') + '/image_1.png'}
        alt={project.name}
        width={project.ios_app_url || isMobile ? 728 : 2880}
        height={project.ios_app_url || isMobile ? 1478 : 1800}
        quality={90}
      />
    </div>
  )
}
