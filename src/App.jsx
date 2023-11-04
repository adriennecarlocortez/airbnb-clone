import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import Copyright from './components/Copyright'

function App() {
  const [count, setCount] = useState(0)
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})        

return (
    <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
            {cards}
        </section>
        <Copyright />
    </div>
)
}

export default App
