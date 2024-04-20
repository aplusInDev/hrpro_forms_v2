
export default function FIsRequired({ obj, onChange }) {

  return (
    <input type='checkbox'
      checked={obj.isRequired}
      onChange={(e) => onChange({...obj, isRequired: e.target.checked})}
    />
  )
}
