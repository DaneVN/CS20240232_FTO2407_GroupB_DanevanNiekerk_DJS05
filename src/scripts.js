import { subscribe, dispatch, getState } from "../model/store.js";
import { increase, decrease, reset } from "../model/actions.js";

const unsubscribe = subscribe((prev, next) => {
  console.log(prev, next);
});

console.log("Initial State:", getState());
dispatch(increase());
dispatch(decrease());
dispatch(reset());
unsubscribe();
