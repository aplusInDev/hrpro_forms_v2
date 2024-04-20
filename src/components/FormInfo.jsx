import { React, useEffect, useState } from 'react'
import { FOption, FDescription } from './ui'
import { getForms, postForm, putForm, deleteForm } from '../services/formService'
import '../assets/css/CustomForm.css'

const company_id = localStorage.getItem('company_id');
const allFormsUrl = `http://localhost:5000/api/v1/companies/${company_id}/forms`;

export default function FormInfo() {
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    const fetchForms = async () => {
      const forms = await getForms(allFormsUrl);
      if (forms) {
        setForms(forms);
        setForm(forms[0]);
      }
    };
    fetchForms();
  }, []);

  // function handleAdd(name, description) {
  // }

  async function handleEdit(form) {
    const updated_form = await putForm({
      name: form.name,
      description: form.description,
      uri: form.uri
    });
    if (updated_form) {
      setForms(forms.map(f => f.id === updated_form.id ? updated_form : f));
      setForm(updated_form);
    }
  }

  async function handleRemove(id) {
    const isDeleted = await deleteForm(id);
    if (isDeleted) {
      setForms(forms.filter((form) => form.id !== id));
      setForm(forms[0]);
    }
  }

  function handleUpdateForm(e) {
    e.preventDefault();
    console.log(form);
  }

  const all_forms = forms.map((form, index) => {
    return (
      <li key={index} onClick={() => { setForm(form); }}>
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
            <FDescription fDescription={form.description} f={form} onChange={setForm} />
        </label>
        <button type='submit'
          onClick={handleUpdateForm}
        >
          Update Form
        </button>
      </form>
      <form className='new-form'>
      </form>
    </div>
  );
}
