import React from 'react';
import './App.css';

class Helloworld extends React.Component {
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if(this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.mytext}</h3>
          {this.props.subtitle}
          <br/>
          <button onClick={this.toggleShow}>Hi!</button>
        </div>
      )
    } else {
      return (
        <div id="hello">
          <h3>
            :(
          </h3>
          <br/>
          <button onClick={this.toggleShow}>sad</button>
        </div>
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
