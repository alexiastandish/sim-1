import React, { Component } from 'react'
import './Form.css'
import axios from 'axios'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      img: '',
      name: '',
      price: 0,
    }

    this.handleChange = this.handleChange.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }

  clearInput() {
    this.setState({ name: '', price: 0, img: '' })
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  addToList() {
    axios
      .post('/api/inventory', {
        img: this.state.img,
        name: this.state.name,
        price: this.state.price,
      })
      .then(this.updateItemsState)
      .then(this.clearInput)
  }

  render() {
    return (
      <div className="form-parent">
        <div className="form-wrapper">
          <div className="image" />
          {/* Input Section */}
          <div className="inputs">
            <input
              type="text"
              name="img"
              placeholder="Img Url"
              value={this.state.img}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          {/* Button Section */}
          <div class="buttons-section">
            <button className="form-button cancel" onClick={this.clearInput}>
              Cancel
            </button>
            <button className="form-button add" onClick={this.addToList}>
              Add to Inventory
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
