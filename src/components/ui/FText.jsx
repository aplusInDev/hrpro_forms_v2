import { React, useState } from 'react'

export default function FName({ fname, ftext }) {
  const [text, setText] = useState(ftext);

  return (
    <input type='text'
      name={fname}
      placeholder={fname}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
