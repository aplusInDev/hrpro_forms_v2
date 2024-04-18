import { React, useState } from 'react'

export default function FOption({
  option,
  onRemove,
  onChange
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(option.text);

  function handleSave() {
    setIsEditing(false);
    onChange({ ...option, text: text });
  }

  function handleRemove() {
    onRemove(option.index);
  }
  
  return (
    <>
      <input name='foption'
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Option'
        disabled={!isEditing}
      />
      {
        isEditing ? (
          <button type='button'
            onClick={handleSave}
          >
            save
          </button>
        ) : (
          <button type='button'
            onClick={() => setIsEditing(true)}
          >
            edit
          </button>
        )
      }
      <button type='button'
        onClick={handleRemove}
      >
        remove
      </button>
    </>
  );
}
