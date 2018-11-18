import React from 'react'
import styles from './ToDoStyles'
// import editForm from './'
function onFormEditing(event) {
  event.preventDefault()
  console.log(event);
}

function ToDoItem({ todo, deleteTodo, checkTodo, editTodo }) {

  return (
    <li style={styles.todoItem}>
    <div>
    <form onSubmit={onFormEditing}>
      <input
        type="checkbox"
        style={styles.todoItemCheckBox}
        onChange={checkTodo(todo.id)}
        checked={todo.checked}
      />
      <span>
        <span id={todo.id}>{todo.name}</span>
      </span>
      
      <button style={styles.todoItemDelete} onClick={deleteTodo(todo.id)}>
        X
      </button>
      </form>
      </div>  
    </li>
  )
}

export default function ToDoList({
  todos,
  deleteTodo,
  editTodo,
  checkTodo,
  isTodoInFilter
}) {
  
  return (
    <ul>
      {todos.filter(isTodoInFilter).map(function(todo) {
        return (
          <ToDoItem
            key={todo.id}
            todo={todo}
            editTodo = {editTodo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}        
          />
        )
      })}
    </ul>
  )
}
