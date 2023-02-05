import ImageHero from './ImageHero'
import SectionDescriptionHero from './SectionDescriptionHero'
import SocialSectionHero from './SocialSectionHero'
import BackgroundHero from './BackgroundHero'
import NavBar from './NavBar'

export default function Hero (): JSX.Element {
  return (
    <div className='flex flex-col relative justify-between'>
      <BackgroundHero />
      <NavBar />
      <div className='flex relative mt-6 justify-between  '>
        <SocialSectionHero />
        <ImageHero />
        <SectionDescriptionHero />
      </div>
    </div>
  )
}
