
export default function FieldReducer(state, action) {
  switch (action.type) {
    case 'EDIT':
      return state.map((field) => {
        if (field.id === action.field.id) {
          return action.field;
        }
        return field;
      });
    case 'REMOVE':
      return state.filter((field) => field.id !== action.id);
    default:
      return state;
  }
}
