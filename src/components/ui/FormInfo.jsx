import { React, useEffect, useState } from 'react'
// import '../../assets/css/FormInfo-old.css'
import { getForms, postForm, putForm } from '../../services/formService'

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

  async function handleAddForm(e) {
    e.preventDefault();
    const text = document.querySelector('input[name="form-title"]');
    const desc = document.querySelector('textarea[name="form-description"]');
    const formInfo = {
      name: text.value,
      description: desc.value,
    };
    const form = await postForm(allFormsUrl, formInfo);
    if (form) {
      setForms([...forms, form]);
      setForm(form);
      text.value = '';
    }
  }

  async function handleUpdateForm(e) {
    e.preventDefault();
    const newForm = await putForm({name: form.name, description: form.description, uri: form.uri});
    if (newForm) {
      setForm(newForm);
      setForms(forms.map(f => f.id === newForm.id ? newForm : f));
    }
  }


  return (
    <form className='form-info'>
      <span>
        <h3 className='form-title'>form name: </h3>
        <select
          name='form-name'
          aria-label='form-name'
          value={form.id}
          onChange={(e) => {
            const formId = e.target.value;
            const form = forms.find(form => form.id === formId);
            setForm(form);
          }}
        >
          {forms.map((form, index) => {
            return (
              <option key={index} value={form.id}>{form.name}</option>
            );
          })}
        </select>
        <h3>form description: </h3>
        <textarea name="form-description"
          placeholder='form description!'
          aria-label='form-description'
          id="2" cols="20" rows="2"
          value={form.description || ''}
          onChange={(e) => {
            setForm({ ...form, description: e.target.value });
          }}
        >
        </textarea>
      </span>
      <span>
        <input type='text'
          name='form-title'
          placeholder='form name'
        />
        <input type='submit'
          value='Add Form'
          onClick={handleAddForm}
        />
        <input type='submit'
          value='Update Form'
          onClick={handleUpdateForm}
        />
      </span>
    </form>
  );
}
