import {FaArrowCircleDown} from 'react-icons/fa';

import styles from './styles.module.scss'

export enum Theme {
  Light,
  Dark
}

export interface Props {
  className?: string
  loaded: boolean
  theme?: Theme
}

export default function ScrollIndicator (props: Props) {
  const theme = props.theme ?? Theme.Light
  const textColor = theme === Theme.Dark ? ' text-gray-800' : ' text-gray-100'
  return (
    <div className={styles.root + textColor + ' absolute z-10 bottom-9 md:bottom-12 h-5 w-5 rounded-full text-2xl transition-opacity delay-1000 duration-500 opacity-' + (props.loaded ? 1 : 0) + ' ' + props.className}>
      <FaArrowCircleDown />
    </div>
  )
}
