import React from 'react'
import ReactDOM from 'react-dom';
import "./App.css"
import App from "./App"

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search App</h1>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
