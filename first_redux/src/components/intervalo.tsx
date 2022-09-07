import Card from "./card";

export default function Intervalo() {
  return (
    <Card cor="yellow" title="Interalo de números">
      <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
        <span className="container">
          <strong>Minímo</strong>
          <input type={'number'}></input>
        </span>
        <span className="container">
          <strong>Maximo</strong>
          <input type={'number'}></input>
        </span>
      </div>
    </Card>
  )
}