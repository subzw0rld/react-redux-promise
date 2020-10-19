import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Home from "./container/Home";

function App() {
  return (
    <Jumbotron fluid>
      <Container>
        <Home></Home>
      </Container>
    </Jumbotron>
  );
}

export default App;
