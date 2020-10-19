import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPostsByID } from "../../action";
import "./index.css";


class Posts extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.props.getPostsByID(params.userID);
  }

  render() {
    const {
      match: { params },
    } = this.props;
    console.log(this.props.posts);
    return (
      <>
        <Helmet>
          <title>{params.username} Posts</title>
        </Helmet>
        <h1>{params.username} Posts</h1>
        {this.props.posts.length
          ? this.props.posts[0].data.map((item, index) => {
              return (
                <Card className="post-card" key={index}>
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Body>{item.body}</Card.Body>
                </Card>
              );
            })
          : `Loading...`}
      </>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPostsByID }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
