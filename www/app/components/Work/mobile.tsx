import AppStore from '@/app/components/Graphics/app-store'
import CoverHeader from '@/app/components/Cover/header'
import CoverImage from '@/app/components/Cover/image'
import CoverText from '@/app/components/Cover/text'
import {Project} from '@/app/data'

interface Props {
  project: Project
  loaded: boolean
  sm: boolean
}

export default function WorkMobile (props: Props) {
  return (
    <>
        <CoverHeader className='p-10 md:px-48 col-span-12 text-center md:hidden' label={props.project.name} url={props.project.web_app_url} />
        {/* content */}
        <div className={'flex flex-col col-start-2 col-span-10 gap-8 md:justify-center md:items-center md:flex-row'}>
          <CoverImage project={props.project} isMobile={props.sm} />
          <div className={(props.project.ios_app_url ? ' md:w-2/4 grid gap-4' : ' max-w-screen-sm mx-auto') + (props.sm ? ' w-full': '') + (props.loaded ? ' opacity-1' : ' opacity-0')}>
            <CoverHeader className='text-center md:text-left hidden md:block' label={props.project.name} url={props.project.web_app_url} />
            <CoverText className='m-0' value={props.project.overview} />
            <AppStore className={'block' + (props.sm ? ' inline-block' : '')} url={props.project.ios_app_url} />
          </div>
        </div>
    </>
  )
}


