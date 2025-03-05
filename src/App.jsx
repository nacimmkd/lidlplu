import './App.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import PluApp from './pages/PluApp'
import Start from './pages/Start'
import Score from './pages/Score'
import SavoirPlus from './pages/SavoirPlus'
import Customize from './pages/Customize'


function App() {
  return (
    <div className="lidlplu">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Start/> } />
          <Route path='savoirplus' element={ <SavoirPlus/> } />
          <Route path='pluapp' element={ <PluApp/> }/>
          <Route path='score' element={ <Score/> } />
          <Route path='customize' element={ <Customize/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
