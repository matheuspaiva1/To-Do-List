import React from 'react'

export default function List() {
  
  return (
    <ul>
        {todoList.map((todo) => (
          
          <li key={todo}>{todo}</li>
        ))}
      </ul>
  )
}
