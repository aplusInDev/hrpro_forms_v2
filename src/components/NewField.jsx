import { React, useState } from 'react'
import { FText, FType, FDescription, FIsRequired } from './ui'
import CustomOptions from './CustomOptions';
import { postField } from '../services/fieldService';

const initialField = {
  name: '',
  description: '',
  type: '',
  isRequired: false,
  defaultValue: '',
  options: []
};

export default function NewField({ formId }) {
  const [field, setField] = useState(initialField);

async function handleSubmit(e) {
    e.preventDefault();
    const newField = {
      fname: field.name,
      fdescription: field.description,
      ftype: field.type,
      default_value: field.defaultValue,
      is_required: field.isRequired,
      options: JSON.stringify(field.options.map(o => o.name)),
    };

    if (field.name !== '' && formId) {
      const postedField = await postField(formId, newField);
      if (postedField) {
        console.log('new field:', postedField);
        setField(initialField);
      }
    }
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
