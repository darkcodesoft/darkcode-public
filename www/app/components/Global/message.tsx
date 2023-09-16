import FXText from "@/app/components/Graphics/fx-text"

export interface Props {
  message: string
}

export default function GlobalMessage (props: Props) {
  return (
    <FXText delay={2.5}>
      <p className={'text-base leading-5 tracking-widest'}>{props.message}</p>
    </FXText>
  )
}
