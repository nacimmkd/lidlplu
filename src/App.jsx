import './App.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import PluApp from './pages/PluApp'
import Start from './pages/Start'
import ScorePage from './pages/ScorePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Start/> } />
        <Route path='plu' element={ <PluApp/> } />
        <Route path='scorepage' element={ <ScorePage/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
