import Contact from "@/app/components/Global/contact"
import WaterMark from "@/app/components/WaterMark"
import {ContactComponent} from "@/app/data"

export interface Props {
  copyright: string
  credit: string
  contact: ContactComponent
}

export default function GlobalFooter (props: Props) {
  return(
    <footer className='relative grid grid-cols-12 text-md overflow-hidden tracking-wide leading-relaxed border-t m-0 py-16'>
      <div className="grid gap-3 col-start-2 col-end-12">
        <Contact {...props.contact} />
        <div className="text-right">
          <p>{props.credit}</p>
          <p>{props.copyright}</p>
        </div>
        </div>
      <WaterMark className="absolute z-10 left-0 -bottom-20 md:-bottom-12 scale-150 fill-white rotate-30 md:-rotate-45" context="footer" />
    </footer>
  )
}

