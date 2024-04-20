import { React, useState } from 'react'

export default function FDescription({ fDescription, f, onChange }) {
  const [text, setText] = useState(fDescription);

  return (
    <textarea
      name="field-description"
      id={nextId++} cols="20" rows="2"
      placeholder='field-description!'
      value={text}
      onChange={(e) => {
        setText(e.target.value)
        onChange({ ...f, description: e.target.value })
    }}>
    </textarea>
  );
}

let nextId = 0;
