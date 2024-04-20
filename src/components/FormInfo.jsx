import { React, useEffect, useState } from 'react'
import { FOption, FDescription } from './ui'
import { getForms, postForm, putForm, deleteForm } from '../services/formService'
import '../assets/css/CustomForm.css'

const company_id = localStorage.getItem('company_id');
const allFormsUrl = `http://localhost:5000/api/v1/companies/${company_id}/forms`;
const initialForm = {
  name: '',
  description: ''
}

export default function FormInfo() {
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [newForm, setNewForm] = useState(initialForm);

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

  async function handleAdd(e) {
    e.preventDefault();
    const added_form = await postForm(allFormsUrl, newForm);
    if (added_form) {
      setForms([...forms, added_form]);
      setForm(added_form);
      setNewForm(initialForm);
    }
  }

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

  function handleChange(form) {
    setForm(form);
    setForms(forms.map(f => f.id === form.id ? form : f));
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
            <FDescription obj={form} onChange={handleChange} />
        </label>
        <button type='submit' onClick={(e) => {
          e.preventDefault();
          handleEdit(form);
        }}>
          Update Form
        </button>
      </form>
      <NewForm newForm={newForm} setNewForm={setNewForm} onAdd={handleAdd} />
    </div>
  );
}

function NewForm({ newForm, setNewForm , onAdd }) {
  return (
    <>
      <form className='new-form'>
        <input
          name='new-form-name'
          type='text'
          placeholder='New Form Name'
          aria-label='new-form-name'
          value={newForm.name}
          onChange={(e) => setNewForm({ ...newForm, name: e.target.value })}
        />
        <textarea
          name='new-form-description'
          placeholder='New Form Description'
          aria-label='new-form-description'
          value={newForm.description}
          onChange={(e) => setNewForm({ ...newForm, description: e.target.value })}
        />
        <button type='submit'
          onClick={onAdd}
        >
          Create Form
        </button>
      </form>
    </>
  )
}
