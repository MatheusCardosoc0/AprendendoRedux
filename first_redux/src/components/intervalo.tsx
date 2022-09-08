import { connect } from "react-redux";
import alterarMax from "../store/actions/Max";
import AlterarMin from "../store/actions/Min";
import Card from "./card";

function Intervalo(props: any) {

  const {min, max} = props


  return (
    <Card cor="yellow" title="Interalo de números">
      <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
        <span className="container">
          <strong>Minímo</strong>
          <input onChange={e => props.alterarMin(e.target.value)}
           value={min} type={'number'} ></input>
        </span>
        <span className="container">
          <strong>Maximo</strong>
          <input type={'number'} onChange={e => props.alterarMax(e.target.value)}
          value={max}></input>
        </span>
      </div>
    </Card>
  )
}

function mapDispatchToProps(dispatch: any){
  return{
    alterarMin(novoNumero: number){
      const action = AlterarMin(novoNumero)
      dispatch(action)
    },
    alterarMax(novoNumero: number){
      const action = alterarMax(novoNumero)
      dispatch(action)
    }
  }
}



const mapStateToProps = (state: any) => {
  return{
    min: state.numeros.min,
    max: state.numeros.max
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)