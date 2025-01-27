
import './App.css'
import Allcompo from './Components/Allcompo/Allcompo'
import { Context1Provider } from './Contexts/Context1'


function App() {

  return (
    <div>
      <Context1Provider>
        <Allcompo></Allcompo>
        <button>Mian Counter </button>
      </Context1Provider>

    </div>
  )
}

export default App
