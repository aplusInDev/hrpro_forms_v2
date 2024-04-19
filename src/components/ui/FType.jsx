import { React, useState } from 'react'

export default function FType({ fType }) {
  const [type, setType] = useState(fType);
  const options = types.map((type, index) => {
    return <option key={index} value={type}>{type}</option>
  });

  return (
    <select
      value={type}
      onChange={(e) => setType(e.target.value)}
    >
      {options}
    </select>
  );
}

const types = [
  "text", "number", "tel",
  "email", "password", "date",
  "checkbox", "select", "texterea",
  "file", "radio"
]
