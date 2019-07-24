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
  }
  addItem = () => {
    console.log('Hello Add Item')
  }
  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} />
      </div>
    )
  }
}

export default App;

// https://medium.com/@kris101/create-a-simple-todo-app-in-react-72d9341a7e6c
