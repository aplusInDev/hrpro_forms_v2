import { React, useState } from 'react'

export default function FDefaultValue({ fDefaultValue }) {
  const [defaultValue, setDefaultValue] = useState(fDefaultValue);

  return (
    <input type='text'
      placeholder='default value'
      value={defaultValue}
      onChange={(e) => setDefaultValue(e.target.value)}
    />
  );
}
