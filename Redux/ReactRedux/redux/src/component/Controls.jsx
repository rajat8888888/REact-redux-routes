import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export const Controls = () => {
  const dispatch = useDispatch();
  const inpElement = useRef();
  function handleInc() {
    dispatch({ type: "INCREMENT" });
  }

  function handleDec() {
    dispatch({ type: "DECERMENT" });
  }
  function handleAdd() {
    dispatch({
      type: "ADD",
      payload: {
        num:(inpElement.current.value),
      },
    });
  }

    function handleHidden(){
      dispatch({  type :"HIIDEN"})
     
    }
  return (
    <div className="controls">
      <button
        type="button"
        className="btn btn-success button"
        onClick={handleInc}
      >
        Success
      </button>
      <button
        type="button"
        className="btn btn-danger button"
        onClick={handleDec}
      >
        Danger
      </button>
      <input type="text" style={{ width: "60px" }} ref={inpElement} />
      <button
        type="button"
        className="btn btn-warning button"
        onClick={handleAdd}
      >
        Warning
      </button>
      <button type="button" class="btn btn-light" onClick={handleHidden}>Light</button>
    </div>
  );
};
