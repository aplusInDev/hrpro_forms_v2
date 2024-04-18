import { React, useReducer, useState } from 'react'
import FOption from './ui/FOption'

export default function CustomOptions() {
  const [text, setText] = useState('');
  const [options, dispatch] = useReducer(
    OptionReducer,
    []
  );

  function handleAddOption() {
    if (!text) {
      return;
    }
    dispatch({ type: 'ADD', id: nextId++, text: text });
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
        onClick={handleAddOption}
      >
        new
      </button>
      <ul>
        {optionsList}
      </ul>
    </>
  );
}

function OptionReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      if (state.some((o) => o.text === action.text)) {
        return state;
      }
      return [...state, { id: action.id, text: action.text }];
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

let nextId = 0;
