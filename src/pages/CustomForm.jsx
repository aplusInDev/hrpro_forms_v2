import { React, useReducer } from 'react'
import { FormInfo } from '../components/ui'
import { NewField } from '../components';

export default function CustomForm() {
  const [form, dispatch] = useReducer(
    FormReducer,
    initialForm
  );

  function handleAddField() {
    dispatch({ type: 'ADD-Field' });
  }

  function handleEditField(field) {
    dispatch({ type: 'EDIT-Field', field: field});
  }

  return (
    <>
      <FormInfo />
      <NewField />
      <table>
        <thead>
          <tr>
            <th>field name</th>
            <th>field description</th>
            <th>field type</th>
            <th>is required</th>
            <th>default value</th>
            <th>field options</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </>
  );
}


let nextId = 0;
const initialForm = {
  name: '',
  description: '',
  fields: []
}

const initialField = {
  pos: nextId++,
  fname: '',
  fdescription: '',
  ftype: 'text',
  is_required: false,
  default_value: '',
  options: []
}

function FormReducer(state, action) {
  switch (action.type) {
    case 'ADD-Field': {
      if (state.fields.some((f) => f.fname === action.fname)) {
        return state;
      }
      return { ...state, fields: [...state.fields, initialField] };
    }
    case 'EDIT-Field': {
      const newFields = state.fields.map((f) => {
        if (f.pos === action.field.pos) {
          return action.field;
        }
        return f;
      });
      return { ...state, fields: newFields };
    }
    case 'REMOVE-Field': {
      const newFields = state.fields.filter((f) => f.pos !== action.pos);
      return { ...state, fields: newFields };
    }
    default:
      return state;
  }
}
