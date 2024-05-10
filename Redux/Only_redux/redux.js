const redux = require("redux");
const INCREMENT = "INCREMENT";
const intialState = {
  counter: 0,
};
const reducer = (store = intialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { counter: store.counter + 1 };
    }
    case "add": {
      return { counter: store.counter + action.payload.number };
    }
  }
};

const store = redux.createStore(reducer);

const suscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(suscriber);

store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: "add" ,payload:{
    number:7
}});
