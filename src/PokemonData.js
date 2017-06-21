import React, { Component } from 'react'

class PokemonData extends Component {
  state = {
    pokemon: {
      name: '',
      height: '',
      weight: '',
    }
  }

  constructor(props) {
    super(props)
    this.fetchPokeData()
  }

  fetchPokeData = () => {
    fetch(`api/v2/pokemon/{id or name}${this.props.match.params.username}`)
    .then(response => response.json())
    .then(pokemon => this.setState({ pokemon })) //TODO check
  }


  render() {
    const { pokemon } = this.state
    {console.log(pokemon)}
    return (
      <div className="pokemon-data">
        <h2>Name: {pokemon.name}</h2>
        <h3>Height: {pokemon.height}</h3>
        <h3>Weight: {pokemon.weight}</h3>
      </div>

    )
  }
}
export default PokemonData
