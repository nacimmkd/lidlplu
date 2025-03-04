import './App.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import PluApp from './pages/PluApp'
import Start from './pages/Start'
import ScorePage from './pages/ScorePage'
import SavoirPlus from './pages/SavoirPlus'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Start/> } />
        <Route path='savoirplus' element={ <SavoirPlus/> } />
        <Route path='pluapp' element={ <PluApp/> } />
        <Route path='score' element={ <ScorePage/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
