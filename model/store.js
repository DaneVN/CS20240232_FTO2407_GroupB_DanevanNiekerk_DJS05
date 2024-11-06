// import { Action } from "./actions";
import { counter } from "./reducers.js";

/**
 * @typedef {object} State
 * @prop {number} value
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 * @returns {EmptyFn}
 */

const initial = {
  count: 0,
};

// // the store itself
const states = [initial];
let subscribers = []; //subscribers

/**
 *
 * @param {Action} action
 */
export const dispatch = (action) => {
  if (typeof action !== "object")
    throw new Error(`Action must be a object, not ${typeof action}`);

  const prev = Object.freeze({ ...states[0] }); //save previous state
  const next = Object.freeze(counter(prev, action)); //run action on next state

  // forEach is more expressive than a loop
  subscribers.forEach((subscription) => subscription(next, prev));
  //remove the changed state from the states array
  //BEWARE: this method can cause state accumulation
  states.unshift(next);
};

/**
 *
 * @param {Subscription} subscription
 * @returns {function}
 */
export const subscribe = (subscription) => {
  subscribers.push(subscription);

  const unsubscribe = () => {
    const result = subscribers.filter((current) => current !== subscription);
    subscribers = result;
    console.log("You have been unsubscribed from this service");
  };
  return unsubscribe;
};

/**
 *
 * @returns {State}
 */
export const getState = () => {
  return Object.freeze({ ...states[0] });
};
