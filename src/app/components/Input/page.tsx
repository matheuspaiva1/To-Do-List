import AppContext from '@/app/contexts/appContext'
import React, { ChangeEvent,  InputHTMLAttributes,  useContext } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>
export default function Input({...rest}: InputProps) {
  return (
    <input
          {...rest}
        />
  )
}
