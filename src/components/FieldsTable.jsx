import { React } from 'react'
import { FText, FType, FDescription, FIsRequired } from './ui'
import CustomOptions from './CustomOptions';
import { Icon } from '@iconify/react';

export default function FieldsTable({ fields, setFields }) {

  function handleChange(field) {
    setFields(fields.map(f => f.id === field.id ? field : f));
  }

  return (
    <table>
        <thead>
          <tr>
            <th>field name</th>
            <th>field description</th>
            <th>field type</th>
            <th>is required</th>
            <th>default value</th>
            <th>field options</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            fields.map((field, index) => (
              <FieldRow key={index} field={field} onChange={handleChange} />
            ))
          }
        </tbody>
      </table>
  );
}

function FieldRow({ field, onChange }) {
  // const options = field.options.map((o, index) => {
  //   return {id: index, name: o}
  // })

  return (
    <tr>
      <td>
        <FText fname={'fname'} obj={field} onChange={onChange} />
      </td>
      <td>
        <FDescription obj={field} onChange={onChange} />
      </td>
      <td>
        <FType obj={field} onChange={onChange} />
      </td>
      <td>
        <FIsRequired obj={field} onChange={onChange} />
      </td>
      <td>
        <FText fname={'default_value'} obj={field} onChange={onChange} />
      </td>
      <td>
        <CustomOptions obj={field} onChange={onChange} key={"fieldsTable" + nextId++} />
      </td>
      <td>
        <button>
          <Icon icon="akar-icons:edit" />
        </button>
        <button>
          <Icon icon="akar-icons:trash" />
        </button>
      </td>
    </tr>
  );
}

let nextId = 0;

// const fields = [
//   {
//     name: 'name',
//     description: 'name of the user',
//     type: 'text',
//     isRequired: true,
//     defaultValue: 'user',
//     options: ['user', 'admin']
//   },
//   {
//     name: 'email',
//     description: 'email of the user',
//     type: 'text',
//     isRequired: true,
//     defaultValue: '',
//     options: []
//   },
//   {
//     name: 'age',
//     description: 'age of the user',
//     type: 'number',
//     isRequired: false,
//     defaultValue: 0,
//     options: []
//   },
// ]
