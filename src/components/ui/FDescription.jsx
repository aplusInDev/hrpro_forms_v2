import { React } from 'react'

export default function FDescription({ obj, onChange }) {

  return (
    <textarea
      name="field-description"
      id={nextId++} cols="20" rows="2"
      placeholder='field-description!'
      value={obj.description}
      onChange={(e) => {
        onChange({ ...obj, description: e.target.value });
    }}>
    </textarea>
  );
}

let nextId = 0;
