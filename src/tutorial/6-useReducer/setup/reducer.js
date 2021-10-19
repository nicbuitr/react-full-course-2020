export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        people: [...state.people, action.payload],
        isModalOpen: true,
        modalContent: "Item Added"
      }
    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Please Enter Value"
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.payload),
        isModalOpen: false
      }
  
    default:
      throw new Error('No matching Action Type');
  }
};