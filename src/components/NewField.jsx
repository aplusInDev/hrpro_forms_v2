import React from 'react'
import { FName, FType, FDescription, FIsRequired, FDefaultValue } from './ui'
import CustomOptions from './CustomOptions';
import '../assets/css/NewField.css'

export default function NewField() {
  return (
    <form className='new-field'
    >
      <span>
        <label>
          <h4>field name</h4>
          <FName />
        </label>
        <label>
          <h4>field description</h4>
          <FDescription />
        </label>
        <label>
          <h4>field type</h4>
          <FType />
        </label>
        <label>
          <h4>is required</h4>
          <FIsRequired />
        </label>
        <label>
          <h4>default value</h4>
          <FDefaultValue />
        </label>
        <label>
          <h4>field options</h4>
          <CustomOptions />
        </label>
      </span>
      <input type='submit' value='new Field' />
    </form>
  );
}
