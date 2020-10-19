import React from "react";
import { Route } from "react-router";
import User from "../components/User";
import Posts from "../components/Posts";
import MainRouter from "./mainrouter";

export default (
  <Route component={MainRouter}>
    <Route path="/" components={{ main: User }}></Route>
    <Route path="/posts/:userID" components={{ main: Posts }}></Route>
  </Route>
);
