import Intervalo from "./components/intervalo"
import Media from "./components/media"
import Soma from "./components/soma"
import Sorteio from "./components/sorteio"

function App() {

  return (
    <main>
      <div className="title">
        <h1>Exercícios React-Redux [simples]</h1>
      </div>
      <div className="coluna">
        <Intervalo></Intervalo>
        <Soma></Soma>
        <Sorteio></Sorteio>
        <Media></Media>
      </div>

    </main>
  )
}

export default App


