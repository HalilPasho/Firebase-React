import React,{useState, useEffect} from 'react';
import './App.css';
import firebase from './firebase';
import TimeList from './components/time_list';
import Form from './components/Form'


// firebase.firestore().collection('times').add({
//   title:'Rubic',
//   time_seconds: 45
// })

function App() {
  return (
    <div className="App">
     <h1>Testing</h1>
     <TimeList />
     <Form />
    </div>
  );
}

export default App;
