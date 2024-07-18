import AppContext from '@/app/contexts/appContext'
import React, { useContext } from 'react'

export default function List() {
  const {todoList} = useContext(AppContext)
  return (
    <ul>
        {todoList.map((todo: any) => (
          
          <li key={todo}>{todo}</li>
        ))}
      </ul>
  )
}
