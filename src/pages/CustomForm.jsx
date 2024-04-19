import { React } from 'react'
import { FormInfo } from '../components/ui'
import { FieldsTable, NewField } from '../components';

export default function CustomForm() {

  return (
    <>
      <FormInfo />
      <NewField />
      <FieldsTable />
    </>
  );
}
