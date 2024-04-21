
export default function FIsRequired({ obj, onChange }) {

  return (
    <input type='checkbox'
      checked={obj.is_required}
      onChange={(e) => onChange({...obj, is_required: e.target.checked})}
    />
  )
}
