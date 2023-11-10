import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  console.log('test')

  const url = 'https://pokeapi.co/api/v2/pokemon/1'

  const getPokemons = async (times) => {
    const numbers = [1, 2, 3, 4, 5]

    const newPokemons = []

    for (let i; i <= 5; i += 1) {
      try {
        const { data } = await axios.get(url)
        newPokemons.push(data)
      } catch (error) {
        console.log(error)
      }
    }
    console.log(newPokemons)
    setPokemons(newPokemons)
  }

  useEffect(() => {
    getPokemons(5)
  }, [])

  return (
    <div>
      <h2>Random pokemons</h2>
      <button>Refresh</button>

      <h3>{pokemons[0] && pokemons[0].name}</h3>
      {/* Lista de pokemons */}
    </div>
  )
}

export default Pokedex
