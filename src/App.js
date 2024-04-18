import React from 'react'
import { FName, FType, FIsRequired, FDefaultValue } from './components/ui'
import { CustomOptions } from './components'

export default function App() {
  return (
    <>
      <FName />
      <FType types={types}/>
      <FIsRequired />
      <FDefaultValue />
      <CustomOptions />
    </>
  )
}

const types = [
  "text", "number", "email", "password",
  "date", "time", "textarea", "select",
  "checkbox", "radio", "file", "tel"
]
