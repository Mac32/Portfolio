import CardService from './CardService'
import H2 from './H2'
import IconDesign from './icons/IconDesign'
import IconCheck from './icons/IconCheck'
import IconAudits from './icons/IconAudits'
import IconAnalytics from './icons/IconAnalytics'

export default function SectionService (): JSX.Element {
  return (
    <div id='helpYou' className='mt-10'>
      <H2 textAlign='text-center'>Servicios</H2>
      <div className='mt-5 flex justify-around gap-6 flex-wrap'>
        <CardService
          number='01'
          title='Diseño y Desarrollo'
          description='Diseños limpios y modernos optimizados para el mejor rendimiento y la conversion de usuarion a clientes.'
        >
          <IconDesign dimentions={70} />
        </CardService>
        <CardService
          number='02'
          title='Amigable con mobiles'
          description='Realizo diseños responsivos que hacen a tu sitio web accesible para todos los usuarios sin importar su dispositivo.'
        >
          <IconCheck dimentions={70} />
        </CardService>
        <CardService
          number='03'
          title='Auditorias'
          description='LLevo a cabo auditorias para mejorar tanto el rendimiento de la página, el SEO y la experiencia de usuario.'
        >
          <IconAudits dimentions={70} />
        </CardService>
        <CardService
          number='04'
          title='Analíticas'
          description='Doy información sobre la navegación por su sitio para que pueda tomar decisiones comerciales más inteligentes.'
        >
          <IconAnalytics dimentions={70} />
        </CardService>
      </div>
    </div>
  )
}
