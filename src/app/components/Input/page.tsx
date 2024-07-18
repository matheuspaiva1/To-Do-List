import AppContext from '@/app/contexts/appContext'
import React, { useContext } from 'react'

export default function Input() {
  const {setTask} = useContext(AppContext)
  return (
    <input
          type="text"
          placeholder="Insira o nome da tarefa"
          onChange={e => setTask(e.target.value)}
        />
  )
}
