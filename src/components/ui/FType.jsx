import React from 'react'

export default function FType() {
  const options = types.map((type, index) => {
    return <option key={index} value={type}>{type}</option>
  });

  return (
    <select>
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
