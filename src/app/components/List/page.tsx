import AppContext from '@/app/contexts/appContext'
import React, { useContext } from 'react'

export default function List() {
  const {todoList} = useContext(AppContext)
  return (
    <ul>
        {todoList.map((todo: any) => (
          
          <li key={todo} className='border border-green-200 mb-4 p-2 rounded-lg text-green-700 font-medium'>{todo}</li>
        ))}
      </ul>
  )
}
