import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import "./App.css";
import Home from './pages/Home';

function App() {
  const theme=useSelector(state=>state.theme)
    
  useEffect(()=>{
    document.querySelector("html").setAttribute("data-theme", theme.theme);
  }, [theme])
  
  return (
    <div>
     <Home />
    </div>
  )
}

export default App
