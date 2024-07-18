'use client'
import Form from '@/app/components/Form/page'
import Input from '@/app/components/Input/page'
import List from '@/app/components/List/page'
import React, { FormEvent, useState } from 'react'

export default function Todo() {
  return (
    <div className="flex flex-col w-full">
      <Form/>

      <List/>
    </div>
  )
}
