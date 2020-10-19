import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getUsers } from "../../action";


export class User extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  renderUserList() {
    console.log(this.props.user);
    if (this.props.user.length) {
      const list = this.props.user[0].data;

      return list.map((item, index) => {
        // console.log(item);
        const path = `/posts/${item.id}`;
        return (
          <Card key={index}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                {item.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>
                <p>Username:</p>
                <Container>{item.username}</Container>
                <p>Email:</p>
                <Container>{item.email}</Container>
                <Container>
                  <Link to={path}>{item.name}'s Posts</Link>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      });
    }
  }

  render() {
    // console.log(this.props);
    return (
      <>
        <h1>Users List</h1>
        <Accordion>{this.renderUserList()}</Accordion>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUsers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
