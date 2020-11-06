import React from 'react';
import './App.css';

class Helloworld extends React.Component {
  state = {
    show: false
  }

  render() {
    if(this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
        </div>
      )
    } else {
      return (
        <h3>:(</h3>
      )
    }
  }
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
