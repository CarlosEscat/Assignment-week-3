export const ADD_COMP = 'ADD_COMP'

export function addComputer(name, manufacturer, year, origin) {
  return {
    type: ADD_COMP,
    payload: {
      name,
      manufacturer,
      year,
      origin
    }
  }
} 

