import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PokemonData from './PokemonData.js'

class Pokemon extends Component {
  state = {
    pName: ''
  }

  //sets the current state.name to what has been entered
  handleChange = (ev) => {
    const pName = ev.currentTarget.value
    this.setState({ pName  })
  }

  //handles the user entering a pokemon's name
  //changes url to /pokemon/(this.state.username)
  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pName}`)
  }

  render() {
    return (
      <div className="pokemon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="pokemon logo" className="pokemon-logo"/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" value={this.state.pName} placeholder="Enter a Pokemon name" onChange={this.handleChange}/>
          </div>
          <div>
            <button type='submit'>Enter</button>
          </div>
        </form>
        <Route exact path='/pokemon' render={() => <h3>Enter a Pokemon name</h3> } />
        <Route path='/:username' component={PokemonData} />
      </div>
    )
  }
}
export default Pokemon
