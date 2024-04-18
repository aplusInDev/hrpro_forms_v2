import React from 'react'

export default function FType({ types }) {
  let options = null;

  if (types) {
    options = types.map((type, index) => {
      return <option key={index} value={type}>{type}</option>
    });
  }

  return (
    <select>
      {options}
    </select>
  );
}
