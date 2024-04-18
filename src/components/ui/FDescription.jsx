import React from 'react'

export default function FDescription() {
  return (
    <textarea name="field-description" id={nextId++} cols="20" rows="2"></textarea>
  )
}

let nextId = 0;
