import React, { Component } from 'react'
import Dashboard from './components/Dashboard/Dashboard'
// import Header from './components/Header/Header'
import Form from './components/Form/Form'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [],
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    this.getItem
  }
  getInventory() {
    axios.get('/api/inventory').then(this.updateItemsState)
  }
  updateItemsState(response) {
    this.setState({ items: response.data })
  }

  render() {
    console.log('this.state.inventory', this.state.inventory)
    console.log('this.state.inventory', this.state.inventory)
    return (
      <div className="App">
        <div className="content-body">
          {/* <Header /> */}
          <Dashboard inventory={this.state.inventory} />
          <Form newProduct={this.addToList} />
        </div>
      </div>
    )
  }
}

export default App
