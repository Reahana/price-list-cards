/* eslint-disable react/jsx-no-target-blank */

import './App.css'
import Dashboard from './Component/Dashboard/Dashboard'
import Navbar from './Component/Navbar/Navbar'
import PriceList from './Component/PriceList/PriceList'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <h1 className='text-7xl text-purple-700'>Hello tailwind</h1>
    <PriceList></PriceList>
    <Dashboard></Dashboard>
    </>
  )
}

export default App
