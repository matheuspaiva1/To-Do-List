'use client'
import Form from '@/app/components/Form/page'
import Input from '@/app/components/Input/page'
import List from '@/app/components/List/page'
import React, { FormEvent, useState } from 'react'

export default function Todo() {
  return (
    <div className="flex flex-col w-full">
      <Form/>

      <div className="flex flex-col w-full max-w-sm my-0 mx-auto mt-8">
        <List/>
      </div>
    </div>
  )
}
