import {Metadata} from 'next'
import Script from 'next/script'
import {Page, PageType, getPage} from "./data"
import Header from './components/Global/header'
import About from './components/about'
import WorkList from './components/Work/list'
import Footer from './components/Global/footer'

// Set homepage metadata.
export async function generateMetadata(): Promise<Metadata> {
  // Get page api data.
  const page: Page = await getPage(PageType.HOME)

  return  {
    title: page.title,
    description: page.description
  }
}

// Homepage.
export default async function HomePage() {
  // Get page api data.
  const page: Page = await getPage(PageType.HOME)

  return (
    <>
      <Script src="/scripts/SplitText.min.js" />
      <Header {...page.component_1} />
      <main className='relative z-10'>
        <About {...page.component_2} />
        <WorkList {...page.component_3} />
      </main>
      <Footer contact={page.component_4} copyright={page.copyright} credit={page.credit} />
    </>
  )
}
