import React from 'react';
import './App.css';

function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  )
}

function App() {
  return (
    <div>
      Componente:
      <Helloworld mytext="Hello" subtitle = "World!"/>
    </div>
  );
}

export default App;
