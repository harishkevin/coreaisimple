import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Appbar from './Appbar';
import Home from './Home';
import Belowbar from './Belowbar';
import Seeallcourses from './Seeallcourses';
import Selectedcourse from './Selectedcourses';
import Plan from './Plan';
import Register from './Register';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Appbar></Appbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/courses' element={<Seeallcourses/>}/>
          <Route path='/course/:courseId' element={<Selectedcourse/>}/>
          <Route path='/plan' element={<Plan/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <Belowbar></Belowbar>
      </Router>
    </>
  )
}

export default App
