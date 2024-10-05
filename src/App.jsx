import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Aside from './components/Aside'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)
  const [cities,setCities]=useState([
    {
        name:"Las Vegas",
        flag:false,
        flag2:false
    },
    {
        name:"London",
        flag:false,
        flag2:false
    },
    {
        name:"Los Angeles",
        flag:false,
        flag2:false
    },
    {
        name:"New York",
        flag:false,
        flag2:false
    }
]);

  return (
    <>
      <Header/>
      <div className='flex'>
        <Aside cities={cities} setCities={setCities}/>
        <Hero cities={cities} setCities={setCities}/>
      </div>
    </>
  )
}

export default App
