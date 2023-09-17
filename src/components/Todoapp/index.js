import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import TodoItem from '../TodoItem'

class Todoapp extends Component {
  state = {todoList: [], input: ''}

  componentDidMount() {
    this.loadTodoListFromLocalStorage()
  }

  onSubmitTask = event => {
    event.preventDefault()
    const {input} = this.state
    const newTodo = {
      id: uuidv4(),
      input,
    }
    this.setState(prevState => ({
      todoList: [...prevState.todoList, newTodo],
      input: '',
    }))
  }

  deleteTask = id => {
    const {todoList} = this.state
    this.setState({todoList: todoList.filter(todo => id !== todo.id)})
  }

  onSaveTodoList = () => {
    const {todoList} = this.state
    localStorage.setItem('todolist', JSON.stringify(todoList))
  }

  loadTodoListFromLocalStorage = () => {
    const storedTodoList = localStorage.getItem('todolist')
    if (storedTodoList) {
      this.setState({todoList: JSON.parse(storedTodoList)})
    }
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {todoList, input} = this.state
    return (
      <div className="app-container">
        <div className="todos-container">
          <div className="main-container">
            <h1 className="heading">Todos</h1>
            <h1 className="create-task">
              {' '}
              <span>Create</span> Task
            </h1>
            <form className="form" onSubmit={this.onSubmitTask}>
              <input
                type="text"
                className="input-text"
                placeholder="What needs to be done ?"
                value={input}
                onChange={this.onChangeInput}
              />
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <h1 className="my-tasks">
              {' '}
              <span>My</span> Tasks
            </h1>
            <ul>
              {todoList.map(eachTodo => (
                <TodoItem
                  eachTodo={eachTodo}
                  key={eachTodo.id}
                  deleteTask={this.deleteTask}
                />
              ))}
            </ul>
            <button
              className="add-btn"
              type="submit"
              onClick={this.onSaveTodoList}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Todoapp
