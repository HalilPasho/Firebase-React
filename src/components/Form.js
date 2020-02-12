import React, { useState, useEffect } from "react";
import firebase from "../firebase";

const Form = props => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const onSubmitFunc = e => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("times")
      .add({ title, time_seconds: parseInt(time) })
      .then(()=>{ 
      setTime("") 
      setTitle("")})
  };

  return (
    <form onSubmit={onSubmitFunc}>
      <h4>Add time :</h4>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>Time</label>
        <input
          type="number"
          value={time}
          onChange={e => setTime(e.currentTarget.value)}
        />
      </div>
      <button>Add time entry</button>
    </form>
  );
};

export default Form;
