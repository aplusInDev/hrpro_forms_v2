import { React, useState, useRef } from 'react'
import { Icon } from '@iconify/react';

export default function FOption({
  option,
  onRemove,
  onChange
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(option.name);
  const inputRef = useRef(null);

  function handleSave() {
    setIsEditing(false);
    onChange({ ...option, name: text });
  }

  function handleEdit() {
    setIsEditing(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function handleRemove() {
    onRemove(option.id);
  }
  
  return (
    <>
      {
        isEditing ? (
          <>
            <input name='foption'
              ref={inputRef}
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='Option'
            />
            <button type='button'
              onClick={handleSave}
            >
              <Icon icon="akar-icons:check" />
            </button>
          </>
        ) : (
          <>
            <h4>{option.name}</h4>
            <button type='button'
              onClick={handleEdit}
            >
              <Icon icon="akar-icons:edit" />
            </button>
          </>
        )
      }
      <button type='button'
        onClick={handleRemove}
      >
        <Icon icon="akar-icons:trash" />
      </button>
    </>
  );
}
