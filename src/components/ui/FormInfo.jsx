import React from 'react'
import '../../assets/css/FormInfo.css'

export default function FormInfo() {
  return (
    <form className='form-info'>
      <span>
        <h3 className='form-title'>form name: </h3>
        <select
          name='form-name'
          aria-label='form-name'
        >
          <option value="1">form 1</option>
          <option value="2">form 2</option>
          <option value="3">form 3</option>
        </select>
        <h3>form description: </h3>
        <textarea name="form-description"
          defaultValue='form description!'
          aria-label='form-description'
          id="2" cols="20" rows="2"
        >
        </textarea>
      </span>
      <span>
        <button type='button'>new field</button>
        <input type='submit' value='submit' />
      </span>
    </form>
  );
}
