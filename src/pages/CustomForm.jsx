import { React, useState, useEffect } from 'react'
import { FormInfo, FieldsTable, NewField } from '../components';
import { getForms } from '../services/formService';
import { getFields } from '../services/fieldService';
import '../assets/css/CustomForm.css'

localStorage.setItem('company_id', 'b344d0e5-6a02-472a-9c82-dc7c9e57d3f1');

//
const company_id = localStorage.getItem('company_id');
const allFormsUrl = `http://localhost:5000/api/v1/companies/${company_id}/forms`;
const initialForm = {
  name: '',
  description: ''
}

export default function CustomForm() {
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      const forms = await getForms(allFormsUrl);
      if (forms) {
        setForms(forms);
        setForm(forms[0]);
        const formFields = await getFields(forms[0].id);
        const allFields = formFields.map(field => {
          return {...field, options: field.options.map((o, index) => {
            return {id: "f" + nextId++, name: o}
          })}
        })
        setFields(allFields);
      }
    };
    fetchForms();
  }, []);

  // console.log('fields: ', fields);

  return (
    <>
      <FormInfo
        form={form}
        setForm={setForm}
        forms={forms}
        setForms={setForms}
        setFields={setFields}
      />
      <NewField formId={form.id} />
      <FieldsTable fields={fields} setFields={setFields} />
    </>
  );
}

let nextId = 0;
