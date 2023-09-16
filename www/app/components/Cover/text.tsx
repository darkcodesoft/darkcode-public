import {useRef, useState} from "react";

import { useIntersection } from "@/app/components/Mixins/useIntersection"

export interface Props {
  className?: string
  value: string
}

export default function CoverText (props: Props) {
  const ref = useRef(null)
  const inViewport = useIntersection(ref, 0)
  const [loaded, setLoaded] = useState(false)

  if (inViewport && !loaded) {
    setLoaded(true)
  }

  return (
    <p ref={ref} className={`${props.className}  leading-relaxed tracking-wide  transition-opacity duration-500 delay-300 opacity-${loaded ? 1 : 0}`}>{props.value}</p>
  )
}
