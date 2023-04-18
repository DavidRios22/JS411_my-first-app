import React from "react"
import { nanoid } from "nanoid"
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      todos: [],
      text: "",
    }
  }

  handleClick = () => {
    console.log("Clicked", this)
    this.setState({
      isClicked: !this.state.isClicked,
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = () => {
    this.setState({
      // todos: [this.state.text]
      todos: [...this.state.todos, {id: nanoid(), text: this.state.text}],
      text: ""
    })
  }

  handleDelete = (id) => {
    console.log("Id is:", id)

    const index = this.state.todos.findIndex(todo => todo.id === id)

    console.log("index", index)

    const copy = [...this.state.todos]

    copy.splice(index, 1)

    this.setState ({
      todos: copy
    })
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button onClick={this.handleSubmit}>Add Todo</button>
        <ul>
          {this.state.todos.map((todo) => {
            return <li className="todo-item" key={todo.id}>
                <h4>{todo.text}</h4>
                <button onClick={() => this.handleDelete(todo.id)}>X</button>
              </li>
          })}
        </ul>
        <div className="divider"></div>
        <h4>{this.state.isClicked === true ? "Clicked" : "Not Clicked"}</h4>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default App
