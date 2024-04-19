import { React, useState } from 'react'

export default function FIsRequired({ fIsRequired }) {
  const [isRequired, setIsRequired] = useState(fIsRequired);

  return (
    <input type='checkbox'
      checked={isRequired}
      onChange={(e) => setIsRequired(e.target.checked)}
    />
  )
}
