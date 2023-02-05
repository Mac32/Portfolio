import CardService from './CardService'
import H2 from './H2'
import IconDesign from './icons/IconDesign'
import IconCheck from './icons/IconCheck'
import IconAudits from './icons/IconAudits'
import IconAnalytics from './icons/IconAnalytics'

export default function SectionService () {
  return (
    <div id='helpYou' className='mt-10'>
      <H2 textAlign='text-center'>Wha Do I Help</H2>
      <div className='mt-5 flex justify-around gap-6 flex-wrap'>
        <CardService
          number='01'
          title='Designer + Development'
          description='Clean, modern designs - optimized for performance, search engines, and converting users to customers.'
        >
          <IconDesign dimentions={70} />
        </CardService>
        <CardService
          number='02'
          title='Mobile Friendly'
          description='A responsive design makes your website accessible to all users, regardless of their device.'
        >
          <IconCheck dimentions={70} />
        </CardService>
        <CardService
          number='03'
          title='Audits'
          description='Looking to improve your page performance, SEO, or user experience? Request a free site audit.'
        >
          <IconAudits dimentions={70} />
        </CardService>
        <CardService
          number='04'
          title='Analytics'
          description='Get insights into who is browsing your site so that you can make smarter business decisions.'
        >
          <IconAnalytics dimentions={70} />
        </CardService>
      </div>
    </div>
  )
}
