import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";


class DropDown extends Component {
  onChange = (e) => {
    this.props.history.push(`/${e.target.value}`);
  }
  render() {
    return (
      <select onChange={this.onChange}>
        <option value="first-route">First</option>
        <option value="second-route">Second</option>
      </select>
    );
  }
}

const Menu = withRouter(DropDown);

function Test() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/first-route" render={() => <h1>First Selected</h1>} />
        <Route path="/second-route" render={() => <h1>Second Selected</h1>} />
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default Test;
