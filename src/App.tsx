import './App.css'
 
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Basic from './components/Basic';
// import Education from './components/Education';
// import Language from './components/Language';
// import Preference from './components/Preference';
// import Reference from './components/Reference';
// import Tech from './components/Tech';
// import Work from './components/Work';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/basic' element={<Basic/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/language' element={<Language/>}/>
      <Route path='/preference' element={<Preference/>}/>
      <Route path='/reference' element={<Reference/>}/>
      <Route path='/tech' element={<Tech/>}/>
      <Route path='/work' element={<Work/>}/> */}
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
