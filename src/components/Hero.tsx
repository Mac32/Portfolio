import ImageHero from './ImageHero'
import SectionDescriptionHero from './SectionDescriptionHero'
import SocialSectionHero from './SocialSectionHero'

export default function Hero () {
  return (
    <div className='flex mt-1 justify-between'>
      <SocialSectionHero />
      <SectionDescriptionHero />
      <ImageHero />

    </div>
  )
}
