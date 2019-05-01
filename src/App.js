import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import Cats from './Cats';
import PageNotFound from './PageNotFound';

import {
  Link, 
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      //  counter: 0
    }
    // I definitely have access to the instance
    // I will use .bind to "lock in" the value of `this`

    // this._incrementCount = this._incrementCount.bind(this);

    // Functions are callable objects.
    // As an object, they can have methods.
    // One of their methods is .bind
    // .bind returns a new copy of the function, 
    // with the value of `this` locked in .
  }
  
  render() {
    return(
      <div className="App">
      {/* <h1>{this.state.counter}</h1>
      <button onClick={this._incrementCount}>increment</button>
      <button onClick={this._incrementCountArrow}>incrementArrow</button> */}
        {/* Link is what you use instead of an anchor */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cats">Cats</Link>

        {/* <Home /> */}
        <Route exact path="/" component={Home} />
        {/* <About /> */}
        <Route path="/about" component={About} />
        {/* <Cats /> */}
        <Route path="/cats" component={Cats} />

      </div>
    )
  }

  // // normal method
  // _incrementCount() {
  //   console.log("incrementCount was called");
  //   console.log(this);
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // }

  // // Arrow functions give you "auto .bind"
  // _incrementCountArrow = () => {
  //   console.log("incrementCountArrow was called");
  //   console.log(this);
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // }


}

export default App;
