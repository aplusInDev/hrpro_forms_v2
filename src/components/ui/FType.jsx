import React from 'react'

export default function FType({ types }) {
  return (
    <select>
      {types.map(type => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  );
}
