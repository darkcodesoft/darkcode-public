import {useEffect, useRef} from "react"
import { gsap } from "gsap"

interface Props {
  animate?: boolean
  duration?: number
  speed?: number
  delay?: number
  text?: any
  children?: any
  ref?:string
  className?: string
  debug?: boolean
  onComplete?: () => void
  onUpdate?: () => void
}

export default function FXText (props: Props) {
  const textRef = useRef(null)
  const duration = props.duration ?? 0.1
  const speed = props.speed ?? 25
  const animate = props.animate ?? true
  const delay = props.delay ?? 1
  const debug = props.debug ?? false
  const attributes = {
    visibility: 'visible', opacity: 0, delay: delay
  }

  useEffect(() => {
    const SplitText = (window as any).SplitText || null

    if (SplitText && textRef.current) {
      const text = new SplitText(textRef.current, {type: 'words, chars'})

      const timeline = gsap.timeline({
        onUpdate: undefined,
        onComplete: props.onComplete
      })

      if (animate) {
        if (debug) console.log(text)
        for(let i = 0; i < text.chars.length; i++){
          timeline.from(text.chars[i], duration, attributes,  i/speed)
          if (debug) console.log(text.chars[i])
        }
      }
    }
  })

  return (
    <div ref={textRef} className={props.className}>{props.text ?? props.children}</div>)

}
