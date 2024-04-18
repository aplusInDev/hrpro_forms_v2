import { React, useState } from 'react'
import FOption from './FOption'

export default function Example() {
  const [options, setOptions] = useState([]);
  const optionsList = options.map((option, index) => (
    <li key={index}> <FOption /> </li>
  ));

  return (
    <>
      <input name='add-options'
        type='test'
        placeholder='Example'
      />
      <button type='button'
        onClick={() => setOptions([...options, ""])}
      >
        new
      </button>
      <ul>
        {optionsList}
      </ul>
    </>
  )
}
