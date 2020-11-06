import React from 'react';
import './App.css';

class Helloworld extends React.Component {
  state = {
    show: true
  }

  render() {
    if(this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.mytext}</h3>
          {this.props.subtitle}
          <br/>
          <button onClick={ () => alert('work')}>Hide</button>
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
