import {ADD_COMP} from '../actionAdd'

// const data =[
//   {
//     name: "Commodore 64",
//     manufacturer: "Commodore",
//     year: 1982,
//     origin: "USA"
//   }
// ]
export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_COMP:
      return [
        ...state,
        { ...action.payload }
      ]

    default:
      return state
  }
}
