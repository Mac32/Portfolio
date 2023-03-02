import IconMenu from './icons/IconMenu'

export default function ButtonMenu (): JSX.Element {
  const handlerClick = (): void => {
    document.querySelector('#contentMenu').classList.toggle('hidden')
  }
  return (
    <button className='mr-4 lg:hidden' onClick={handlerClick}>
      <IconMenu hidden='show' />
    </button>
  )
}
