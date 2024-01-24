import { useState } from 'react'
import './App.css'
import Foodbox from './components/Foodbox/Foodbox.jsx'
import FoodData from './resources/FoodData.js'

function App() {
  const [searchItem, setSearchItem] = useState("")

  const handleSearch = (e) => {
    setSearchItem(e.target.value)
  }

  let filteredData = FoodData.filter((el) => el.name.toLowerCase().includes(searchItem.toLowerCase()))

  return (
    <div className='App'>
    <h1>Pro nutrition</h1>
    <input type='text' placeholder='Search by name' onChange={handleSearch} className='search-bar'/>
    {
      filteredData.map((el, i) => (
        <Foodbox data={el} key={i} />
      ))
    }
    </div>
  )
}

export default App
