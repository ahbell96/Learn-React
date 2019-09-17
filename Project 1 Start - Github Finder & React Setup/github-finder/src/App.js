import React, { Component } from "react";
import "./App.css";

// class App extends React.Component {
// }

class App extends Component {
  foo1 = () => "Bars";
  render() {
    // vars
    const name = "Andrew Bell";
    const loading = false;
    const showName = true;

    // if (loading) {
    //   return <h4>Loading...</h4>;
    // }

    let sum = 50 + 50;
    let char = "D";

    // ES6

    const foo = () => "Bar";

    return (
      // JSX
      // all must be within the parent div of 'App'
      // However Fragments can be used instead.

      // <Fragment> --> would need to add fragment to the import section at top.
      //   <h1>Hello from React</h1>
      //   <h2>Hello there!</h2>
      // </Fragment>

      <div className='App'>
        <h1>My App</h1>
        {loading ? <h4>Loading...</h4> : <h1>Hello from {showName && name}</h1>}

        {/* <h2>Upper case! {name.toUpperCase()}</h2>
        <h2>the value of my name is {name.valueOf()}</h2>
        <h2>Length of my name is {name.length}</h2>
        <h2>{24 + 24}</h2>
        <h3>{sum}</h3>
        <h3>{char}</h3>
        <h3>{console.log(char)}</h3> */}
        {/* <label htmlFor='name'>name</label> */}

        {/* <h1>{this.foo1()}</h1>
        <h1>{foo()}</h1> */}
      </div>
    );
  }
}

export default App;
