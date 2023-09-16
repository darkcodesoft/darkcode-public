import CoverHeader from '@/app/components/Cover/header'
import CoverImage from '@/app/components/Cover/image'
import CoverText from '@/app/components/Cover/text'
import {Project} from '@/app/data'

interface Props {
  project: Project
  loaded: boolean
  sm: boolean
}

export default function WorkWeb (props: Props) {
  return (
    <>
        <CoverHeader className='p-10 md:px-48 col-span-12 text-center' label={props.project.name} url={props.project.web_app_url} />
        {/* content */}
        <div className='flex flex-col col-start-2 col-span-10 gap-8 '>
          <CoverImage className='md:h-3/4' project={props.project} isMobile={props.sm} />
          <div className={'max-w-screen-sm mx-auto' + (props.sm ? ' w-full': '') + (props.loaded ? ' opacity-1' : ' opacity-0')}>
            <CoverText className='m-0' value={props.project.overview} />
          </div>
        </div>
    </>
  )
}



