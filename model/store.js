const initial = {
  count: 0,
};

// // the store itself
const states = [initial];
let notifiers = [];

export const dispatch = (action) => {
  if (typeof action !== "function")
    throw new Error("Action needs to be a function type");

  const prev = Object.freeze({ ...states[0] }); //save previous state
  const next = Object.freeze({ ...action(prev) }); //run action on next state

  // forEach is more expressive than a loop
  notifiers.forEach((notify) => notify(next, prev));
  //remove the changed state from the states array
  states.unshift(next);
};

export const subscribe = (notify) => {
  notifiers.push(notify);

  const unsubscribe = () => {
    const result = notifiers.filter((current) => {
      current !== notify;
    });
    notifiers = result;
    console.log("You have been unsubscribed from this service");
  };
  return unsubscribe;
};

export const getState = (state, key) => {
  return state[key];
};
