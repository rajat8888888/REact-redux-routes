import {
  createContext,
  useCallback,
  useReducer,
  useState,
  useEffect,
} from "react";
import { PostList } from "../component/PostList";

export const socialContext = createContext();

function socialReducer(currentPost, action) {
  let newPost = currentPost;
  switch (action.type) {
    case "ADD_POST": {
      newPost = [action.payload.posts, ...currentPost];
      return newPost;
    }

    case "ADD_SERVER_POST": {
      newPost = action.payload.posts;

      return newPost;
    }

    case "DELETE_POST": {
      newPost = currentPost.filter((item) => item.id !== action.payload.id);
    }
  }
  return newPost;
}

const CreateStoreProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(socialReducer, []);


  const addPost = useCallback(
    (posts) => {
      let addActionPost = {
        type: "ADD_POST",
        payload: {
          posts,
        },
      };
      return dispatch(addActionPost);
    },
    [dispatch]
  );

  const addServerPost = useCallback(
    (posts) => {
      let addServerAction = {
        type: "ADD_SERVER_POST",
        payload: {
          posts,
        },
      };
      return dispatch(addServerAction);
    },
    [dispatch]
  );

  const deletePost = useCallback(
    (id) => {
      let deleteActionPost = {
        type: "DELETE_POST",
        payload: {
          id,
        },
      };
      return dispatch(deleteActionPost);
    },
    [dispatch]
  );



  return (
    <socialContext.Provider
      value={{
 
        
       
        deletePost,
      }}
    >
      {children}
    </socialContext.Provider>
  );
};

export default CreateStoreProvider;

