
interface CardProps{
  children: any
  title: string
  cor: 'green' | 'purple' | 'blue' | 'yellow'
}

export default function Card(props: CardProps){
  return(
    <div className={`card ${props.cor}`}>
      <div className={`header ${props.cor}`}>
        <h3>{props.title}</h3>
      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}