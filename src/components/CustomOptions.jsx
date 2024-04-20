import { React, useReducer, useState } from 'react'
import FOption from './ui/FOption'
import '../assets/css/CustomOptions.css'
import { Icon } from '@iconify/react';

export default function CustomOptions({ fOptions }) {
  const [text, setText] = useState('');
  const [options, dispatch] = useReducer(
    OptionReducer,
    fOptions
  );

  function handleAddOption() {
    if (!text) {
      return;
    }
    dispatch({ type: 'ADD', name: text });
    setText('');
  }

  function handleChangeOption(option) {
    dispatch({ type: 'EDIT', option: option });
  }

  function handleRemoveOption(id) {
    dispatch({ type: 'REMOVE', id: id });
  }

  const optionsList = options.map((option) => (
    <li key={option.id}>
      <FOption
        option={option}
        onRemove={handleRemoveOption}
        onChange={handleChangeOption}
      />
    </li>
  ));

  return (
    <>
      <input name='add-options'
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='options'
      />
      <button type='button'
        className='add-option-button'
        onClick={handleAddOption}
      >
        <Icon icon="akar-icons:plus" />
        <span>option</span>
      </button>
      {
        options.length > 0 &&
        <div className='options-list'>
          <ul>
            {optionsList}
          </ul>
        </div>
      }
    </>
  );
}

function OptionReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      if (state.some((o) => o.name === action.name)) {
        return state;
      }
      return [...state, { id: state.length, name: action.name }];
    }
    case 'REMOVE': {
      return state.filter((o) => o.id !== action.id);
    }
    case 'EDIT': {
      return state.map((o) => {
        if (o.id === action.option.id) {
          return action.option;
        }
        return o;
      });
    }
    default:
      return state;
  }
}
