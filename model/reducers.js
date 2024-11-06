/**
 * @param {State} state
 * @param {Action} action
 * @returns {object | State}
 */
import { getState } from "./store.js";
export function counter(state = getState(), action) {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        count: state.count + 2,
      };
    }
    case "SUBTRACT": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case "RESET": {
      return {
        ...state,
        count: 0,
      };
    }
    default:
      return state;
  }
}
