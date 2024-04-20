import { React, useState } from 'react'
import { Icon } from '@iconify/react';

export default function FOption({
  option,
  onRemove,
  onChange
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(option.name);

  function handleSave() {
    setIsEditing(false);
    onChange({ ...option, name: text });
  }

  function handleRemove() {
    onRemove(option.id);
  }
  
  return (
    <>
      {/* <input name='foption'
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Option'
        disabled={!isEditing}
      /> */}
      {
        isEditing ? (
          <>
            <input name='foption'
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
              onClick={() => setIsEditing(true)}
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
