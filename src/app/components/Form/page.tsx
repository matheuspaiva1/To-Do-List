import React, { FormEvent, useContext } from 'react'
import Input from '../Input/page'
import AppContext from '@/app/contexts/appContext'

export default function Form() {
  const {todoList, setTodoList, task} = useContext(AppContext)

  function handleAddTodoList(event: FormEvent) {
    event.preventDefault()
    setTodoList((oldTodoList: any) => [...oldTodoList, task])
  }
  return (
    
    <form
        className="flex flex-col w-full max-w-sm my-0 mx-auto"
        onSubmit={handleAddTodoList}
      >
        <Input/>
        <button type="submit">Add</button>
      </form>
  )
}
