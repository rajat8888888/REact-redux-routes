import { createStore } from "redux";

const intialState = {
  counter: 0,
};

const storeReducer = (store = intialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { counter: store.counter + 1 };
    }

    case 'DECREMENT':{
        return {counter:store.counter-1}
    }
    case "ADD":{
      
        return {...store,counter:store.counter+Number(action.payload.num)}
    }
  }
};

const counterStore = createStore(storeReducer);

export default counterStore;
