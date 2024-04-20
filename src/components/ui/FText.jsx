
export default function FText({ fname, obj, onChange }) {

  return (
    <input type='text'
      name={fname}
      placeholder={fname}
      value={obj[fname]}
      onChange={(e) => {onChange({...obj, [fname]: e.target.value})}}
    />
  );
}
