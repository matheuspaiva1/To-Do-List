import React, { FormEvent, useContext } from 'react'
import Input from '../Input/page'
import AppContext from '@/app/contexts/appContext'
import Button from '../Button/page'

export default function Form() {
  const {setTask, setTodoList, task} = useContext(AppContext)

  function handleAddTodoList(event: FormEvent) {
    event.preventDefault()
    setTodoList((oldTodoList: any) => [...oldTodoList, task])
    setTask('')
  }
  return (
    <form
        className="flex flex-col w-full max-w-sm my-0 mx-auto"
        onSubmit={handleAddTodoList}
      >
        <Input 
          className='border p-4 mt-8 mb-4 text-green-300'
          value={task}
          type='text' 
          placeholder="Insira uma nova tarefa"
          onChange={(e) => setTask(e.target.value)}
        />

        <Button
          className='bg-green-400 text-zinc-50 font-bold py-2 rounded'
          type="submit"
        >
            Adicionar
          </Button>
        <hr className='border mt-8'/>
      </form>
      
  )
}
