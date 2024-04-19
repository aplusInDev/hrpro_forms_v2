import { React } from 'react'
import { FormInfo } from '../components/ui'
import { FieldsTable, NewField } from '../components';

localStorage.setItem('company_id', 'b344d0e5-6a02-472a-9c82-dc7c9e57d3f1');

export default function CustomForm() {

  return (
    <>
      <FormInfo />
      <NewField />
      <FieldsTable />
    </>
  );
}
