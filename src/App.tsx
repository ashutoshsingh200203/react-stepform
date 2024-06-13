import './App.css'
 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ListUser from './components/ListUser';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/list' element={<ListUser/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
