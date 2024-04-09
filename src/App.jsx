import "./App.css"
import { useState } from "react"

const api = {
  key: "d133ba6b183cd71e8c1dd1203068f0a5",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState({})

  const searchPrest = () => {
    fetch(`${api.base}weather?q=${search}&units=matric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result)
    })
  }
  return(
    <div className="App">
    <header className="App-header">
<h1>Weather App</h1>
<div>
  <input type="text" placeholder="Enter your name" onChange={(e) => setSearch(e.target.value)}  />
  <button onClick={searchPrest}>Search</button>
</div>
{typeof weather.main !== "undefined" ? (
<div>
  <p>{weather.name}</p>
  <p>{weather.main.temp}°C</p>
</div>
) : (
  ""
)}
    </header>
    </div>
  )

}
export default App
