import {createStore} from "redux";

const intialValue = {
  count: 0,
  hidden:false
};

const reducer = (store = intialValue, action) => {
      switch(action.type){
        case "INCREMENT":{
            return {...store,count:store.count+1}
        }
        case "DECERMENT":{
            return {...store,count:store.count-1}
        }
        case "ADD":{
            return{...store,count:store.count+Number(action.payload.num)}
        }
        case "HIDDEN":{
           return {...store,hidden: !store.hidden}
        }
      }
};
const store = createStore(reducer);

export default  store;