import React from 'react'
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
              <tr key={index}>
                <td><FName /></td>
                <td><FDescription /></td>
                <td><FType /></td>
                <td><FIsRequired /></td>
                <td><FDefaultValue /></td>
                <td><CustomOptions options={field.options} /></td>
                <td>
                  <button>
                    <Icon icon="akar-icons:edit" />
                  </button>
                  <button>
                    <Icon icon="akar-icons:trash" />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
  );
}

const fields = [
  {
    name: 'name',
    description: 'name of the user',
    type: 'string',
    isRequired: true,
    defaultValue: 'user',
    options: ['user', 'admin']
  },
  {
    name: 'email',
    description: 'email of the user',
    type: 'string',
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
    foptions: []
  },
]
