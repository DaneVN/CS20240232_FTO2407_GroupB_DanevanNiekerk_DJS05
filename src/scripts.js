import { subscribe, dispatch, getState } from "../model/store.js";
import { increase, decrease, reset } from "../model/actions.js";
import { counter } from "../model/reductors.js";

const unsubscribe = subscribe((prev, next) => {
  console.log(prev, next);
});

dispatch(getState);
console.log(counter(0, increase));
// dispatch(counter(getState[0], increase));
// dispatch(counter(getState[0], decrease));
// dispatch(counter(getState[0], reset));
unsubscribe();
