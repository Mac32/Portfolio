type props = {
  children: string
  textAlign: string
}

export default function H2 ({children, textAlign = ''}: props) {
  return(
    
    <h2 className={`text-6xl ${textAlign}`}>{children}</h2>

  )
}