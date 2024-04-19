import { React, useState } from 'react'

export default function FName({ fname }) {
  const [name, setName] = useState(fname);

  return (
    <input type='text'
      placeholder='field name'
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
