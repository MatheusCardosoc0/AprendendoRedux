import Card from "./components/card"
import Intervalo from "./components/intervalo"

function App() {

  return (
    <main>
      <div className="title">
        <h1>Exercícios React-Redux [simples]</h1>
      </div>
      <div className="coluna">
        <Intervalo></Intervalo>
        <Card cor="purple" title="card 1">eae</Card>
        <Card cor="green" title="card 1">eae</Card>
        <Card cor="blue" title="card 1">eae</Card>
      </div>

    </main>
  )
}

export default App

