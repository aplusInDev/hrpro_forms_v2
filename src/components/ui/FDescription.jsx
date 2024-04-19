import { React, useState } from 'react'

export default function FDescription({ fDescription }) {
  const [description, setDescription] = useState(fDescription);

  return (
    <textarea
      name="field-description"
      id={nextId++} cols="20" rows="2"
      value={description || "field-description!"}
      onChange={(e) => setDescription(e.target.value)}
    >
    </textarea>
  );
}

let nextId = 0;
