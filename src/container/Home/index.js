import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Posts from "../../components/Posts";
import User from "../../components/User";

export default class Home extends Component {
  
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Route path="/" exact component={User}></Route>
            <Route path="/posts/:username/:userID" component={Posts}></Route>
          </>
        </BrowserRouter>
      </>
    );
  }
}
