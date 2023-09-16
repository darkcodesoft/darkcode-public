import { gsap } from 'gsap';
import {useRef} from 'react';

import styles from './styles.module.scss'

export interface Props {
  loaded: boolean
}

export default function Loader (props: Props) {
  const root = useRef(null)

  if (props.loaded) {
    gsap.to(root.current, {marginTop: 150})
  }

  return(
    <div ref={root} className={styles.root}>
      <div className={styles.side + ' ' + styles.front}>{ '{' }</div>
      <div className={styles.side + ' ' + styles.back}>{ '}' }</div>
      <div className={styles.side + ' ' + styles.left}>&fnof;</div>
      <div className={styles.side + ' ' + styles.right}>+</div>  
      <div className={styles.side + ' ' + styles.bottom}>=</div>
      <div className={styles.side + ' ' + styles.top}>#</div>
    </div>
  )
}
