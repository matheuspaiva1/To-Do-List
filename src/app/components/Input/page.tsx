import React from 'react'

export default function Input() {
  return (
    <input
          type="text"
          placeholder="Insira o nome da tarefa"
          onChange={e => setTask(e.target.value)}
        />
  )
}
