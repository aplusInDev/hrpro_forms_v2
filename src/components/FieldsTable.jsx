import { React } from 'react'
import { FName, FType, FDescription, FIsRequired, FDefaultValue } from './ui'
import CustomOptions from './CustomOptions';
import '../assets/css/FieldsTable.css'
import '../assets/css/NewField.css'
import { Icon } from '@iconify/react';

export default function FieldsTable() {
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
              <FieldRow key={index} field={field} />
            ))
          }
        </tbody>
      </table>
  );
}

function FieldRow({ field }) {
  const options = field.options.map((o, index) => {
    return {id: index, name: o}
  })

  return (
    <tr>
      <td><FName fname={field.name} /></td>
      <td><FDescription fDescription={field.description}/></td>
      <td><FType fType={field.type} /></td>
      <td><FIsRequired fIsRequired={field.isRequired} /></td>
      {/* <td><FDefaultValue fDefaultValue={field.defaultValue}/></td> */}
      <td><CustomOptions fOptions={options} /></td>
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

const fields = [
  {
    name: 'name',
    description: 'name of the user',
    type: 'text',
    isRequired: true,
    defaultValue: 'user',
    options: ['user', 'admin']
  },
  {
    name: 'email',
    description: 'email of the user',
    type: 'text',
    isRequired: true,
    defaultValue: '',
    options: []
  },
  {
    name: 'age',
    description: 'age of the user',
    type: 'number',
    isRequired: false,
    defaultValue: 0,
    options: []
  },
]
