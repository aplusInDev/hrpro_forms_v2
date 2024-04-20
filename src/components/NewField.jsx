import { React, useState } from 'react'
import { FText, FType, FDescription, FIsRequired } from './ui'
import CustomOptions from './CustomOptions';

const initialField = {
  name: '',
  description: '',
  type: '',
  isRequired: false,
  defaultValue: '',
  options: []
};

export default function NewField() {
  const [field, setField] = useState(initialField);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitting:', field);
    setField(initialField);
  }

  return (
    <form className='new-field'
    >
      <span>
        <label>
          <h4>field name</h4>
          <FText fname={'name'} obj={field} onChange={setField} />
        </label>
        <label>
          <h4>field description</h4>
          <FDescription obj={field} onChange={setField} />
        </label>
        <label>
          <h4>field type</h4>
          <FType obj={field} onChange={setField} />
        </label>
        <label>
          <h4>is required</h4>
          <FIsRequired obj={field} onChange={setField} />
        </label>
        <label>
          <h4>default value</h4>
          <FText fname={'defaultValue'} obj={field} onChange={setField} />
        </label>
        <label>
          <h4>field options</h4>
          <CustomOptions obj={field} onChange={setField} key={"k"+ nextId++} />
        </label>
      </span>
      <input type='submit' value='Add Field' onClick={handleSubmit} />
    </form>
  );
}

let nextId = 0;
