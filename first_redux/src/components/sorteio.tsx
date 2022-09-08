import Card from "./card";
import { connect } from 'react-redux'


function Sorteio(props: any) {

  const {min, max} = props

  function random(){
    return parseInt(Math.random() * (max - min)) + min
  }

  return (
    <Card cor="green" title="Sorteio">
      <div>
        <span>
          Resultado:
        </span>
        <strong>
          {random()}
        </strong>
      </div>
    </Card>
  )
}

const mapStateToProps = (state: any) =>{
  return{
    min: state.numeros.min,
    max: state.numeros.max
  }
}


export default connect(mapStateToProps)(Sorteio)