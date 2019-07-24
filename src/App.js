import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import TodoList from './TodoList.js';

class App extends Component {
  constructor() {
    super()
    this.sate = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    console.log('Hello Input')
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    console.log('Hello Add Item')
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
          items: items,
          currentItem: { text: '', key: '' }
      })
    }
  }
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.currentItem}
        />
      </div>
    )
  }
}

export default App;

// https://medium.com/@kris101/create-a-simple-todo-app-in-react-72d9341a7e6c
