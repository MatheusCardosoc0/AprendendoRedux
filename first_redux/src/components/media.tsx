import Card from "./card";
import {connect, Connect} from "react-redux"

const Media = (props:any) => {
  const {min, max} = props
  return (
    <Card cor="blue" title="Media">
      <div>
        <span>
          Resultado:
        </span>
        <strong>
          {(min + max) / 2}
        </strong>
      </div>
    </Card>
  )
}

const mapStateToProps = (state: any) =>{
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

export default connect(mapStateToProps)(Media)