// Write your code here.

import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const [checkbox, chnageCheckbox] = useState(false)
  const {eachTodo, deleteTask} = props
  const {id, input} = eachTodo

  const deleteButton = () => {
    deleteTask(id)
  }

  const changeCheck = () => {
    chnageCheckbox(!checkbox)
  }

  const labelclass = checkbox ? 'true-class' : 'false-class'

  return (
    <li className="todos-list-container">
      <input
        type="checkbox"
        className="checkbox"
        checked={checkbox}
        onChange={changeCheck}
      />
      <div className="label-container">
        <p className={labelclass}>{input}</p>
        <button type="button" className="delete-btn" onClick={deleteButton}>
          <img
            src="https://img.icons8.com/ios/50/waste.png"
            alt="filled-trash"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
