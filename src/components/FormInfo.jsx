import { React, useEffect, useState } from 'react'
import { FOption, FDescription } from './ui'
import { NewForm } from './'
import { getForms, putForm, deleteForm } from '../services/formService'

const company_id = localStorage.getItem('company_id');
const allFormsUrl = `http://localhost:5000/api/v1/companies/${company_id}/forms`;
const initialForm = {
  name: '',
  description: ''
}

export default function FormInfo({ setFormId }) {
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    const fetchForms = async () => {
      const forms = await getForms(allFormsUrl);
      if (forms) {
        setForms(forms);
        setForm(forms[0]);
        setFormId(forms[0].id);
      }
    };
    fetchForms();
  // }, []);
  }, [setFormId]);

  async function handleEdit(form) {
    const updated_form = await putForm({
      name: form.name,
      description: form.description,
      uri: form.uri
    });
    if (updated_form) {
      setForms(forms.map(f => f.id === updated_form.id ? updated_form : f));
      setForm(updated_form);
      setFormId(updated_form.id);
    }
  }

  async function handleRemove(id) {
    const isDeleted = await deleteForm(id);
    if (isDeleted) {
      setForms(forms.filter((form) => form.id !== id));
      setForm(forms[0]);
      setFormId(forms[0].id);
    }
  }

  function handleChange(form) {
    setForm(form);
    setForms(forms.map(f => f.id === form.id ? form : f));
    setFormId(form.id);
  }

  const all_forms = forms.map((form, index) => {
    return (
      <li key={index} onClick={() => { setForm(form); setFormId(form.id)}}>
        <FOption option={form} onChange={handleEdit} onRemove={handleRemove}/>
      </li>
    );
  });


  return (
    <div className='form-info'>
      <form className='all-forms'>
        <label>
          <h3>Form Name </h3>
          <button type='button' className='form-info-btn' >
            {form.name}
          </button>
          <div className='forms-list'>
            <ul>
              {all_forms}
            </ul>
          </div>
        </label>
        <label>
          <h3>Form Description</h3>
            <FDescription obj={form} onChange={handleChange} />
        </label>
        <button type='submit' onClick={(e) => {
          e.preventDefault();
          handleEdit(form);
        }}>
          Update Form
        </button>
      </form>
      <NewForm onAdd={handleChange} />
    </div>
  );
}
