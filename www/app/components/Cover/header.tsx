import {useRef, useState} from "react";
import {FaArrowCircleRight} from 'react-icons/fa';

import FXText from "@/app/components/Graphics/fx-text"
import { useIntersection } from "@/app/components/Mixins/useIntersection"

interface Props {
  className?: string
  label?: string
  url?: string
}

export default function CoverHeader (props: Props) {
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
    <h2 ref={ref} className={'text-2xl md:text-3xl font-bold ' + props.className}>
      { loaded &&
      <FXText
        animate={split}
        onComplete={onComplete}
      >
        <a className={'group duration-300 inline'} target='_blank' href={props.url} title={'Go to ' + props.label} aria-label={'Go to ' + props.label}>
          <span className='ease-out md:hover:text-gray-500'>{props.label}</span>
          <FaArrowCircleRight className={'text-lg transition scale-0 -rotate-45 inline ml-2 md:group-hover:translate-x-1 md:group-hover:scale-125' + ((loaded && !split) ? ' scale-100' : '')} />
        </a>
      </FXText>
      }
    </h2>
  )
}
