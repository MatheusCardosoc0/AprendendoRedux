import { connect } from "react-redux";
import Card from "./card";

function Soma(props: any) {

  const {min, max} = props

  return (
    <Card cor="purple" title="Soma">
      <div>
        <span>
          Resultado:
        </span>
        <strong>
          {min + max}
        </strong>
      </div>
    </Card>
  )
}

const mapStateToProps = (state: any) => {
  return{
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Soma)