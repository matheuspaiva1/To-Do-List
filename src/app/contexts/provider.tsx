'use client'
import React, { useState, ReactNode } from 'react'
import AppContext from './appContext'

interface ProviderProps{
  children: ReactNode,
}
export default function Provider({children}: ProviderProps){
  const [task, setTask] = useState('')
  const [todoList, setTodoList] = useState<string[]>([])

  


  const value = {
    task,
    setTask,
    todoList,
    setTodoList,

  }

  return (
    <div>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </div>
)
}