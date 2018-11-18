import React from 'react'
import styles from './ToDoStyles'

export default function ToDoFooter({ todos }) {
  const itemLeft = todos.filter(function(todo) {
    return !todo.checked
  }).length

  return (
    <div style={styles.footer.container}>
      <p style={styles.footer.itemsLeft}>{itemLeft} items left</p>
    </div>
  )
}
