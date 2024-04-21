import { React } from 'react'
import { FOption, FDescription } from './ui'
import { NewForm } from './'
import { putForm, deleteForm } from '../services/formService'
import { getFields } from '../services/fieldService'

export default function FormInfo({
  form, setForm,
  forms, setForms,
  setFields
}) {

  async function handleEdit(form) {
    const updated_form = await putForm({
      name: form.name,
      description: form.description,
      uri: form.uri
    });
    if (updated_form) {
      setForms(forms.map(f => f.id === updated_form.id ? updated_form : f));
      setForm(updated_form);
      console.log("edit:", updated_form.fields);
      setFields(updated_form.fields);
    }
  }

  async function handleRemove(id) {
    const isDeleted = await deleteForm(id);
    if (isDeleted) {
      setForms(forms.filter((form) => form.id !== id));
      setForm(forms[0]);
      console.log("remve: ", forms[0].fields);
      setFields(forms[0].fields);
    }
  }

  function handleChange(form) {
    setForm(form);
    setForms(forms.map(f => f.id === form.id ? form : f));
  }

  function handleClick(form) {
    setForm(form);
    getFields(form.id).then((fields) => {
      console.log("click:", fields);
      const allFields = fields.map(field => {
        return {...field, options: field.options.map((o, index) => {
          return {id: "f" + nextId++, name: o}
        })}
      })
      setFields(allFields);
    });
  }

  const all_forms = forms.map((form, index) => {
    return (
      <li key={index} onClick={() => {handleClick(form)}}>
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

let nextId = 0;
