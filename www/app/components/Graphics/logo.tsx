import FXText from "./fx-text"

export interface Props {
  title: string
  sub_title: string
  loaded: boolean
}

export default function Logo (props: Props) {
  return (
    <div className='absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center'>
      <FXText speed={15}>
        <h1 className={'transition-opacity duration-500 delay-500 text-5xl font-bold md:text-8xl opacity-' + (props.loaded ? 1 : 0)}>{props.title}</h1>
      </FXText>
      <FXText delay={1.5}>
        <h4 className={'transition-opacity duration-500 delay-1000 text-base mt-5 opacity-' + (props.loaded ? 1 : 0)}>{props.sub_title}</h4>
      </FXText>
    </div>
  )
}
