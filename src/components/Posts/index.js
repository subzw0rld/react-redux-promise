import React, { Component } from "react";
import { connect } from "react-redux";

// import { GET_USERS } from "../../constants";

export class Posts extends Component {
  renderUserList(userList) {
      console.log(userList);
  }

  render() {
    return (
      <>
        <h1>Users List</h1>
        <ul className="user-list">renderUserList(this.props.getUsers)</ul>
      </>
    );
  }
}

function mapStateToProps({ getUsers }) {
  return { getUsers };
}

export default connect(mapStateToProps)(Posts);
