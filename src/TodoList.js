import React, { Component } from 'react'
class TodoList extends Component {
  // this is supposed to put the cursor back in the text box after submit,
  //but is breaking at 'current'

  // componentDidUpdate() {
  //   this.props.inputElement.current.focus()
  // }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList;
