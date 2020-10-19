import React, { Component } from "react";

export default class MainRouter extends Component {
  render() {
    return (
        <div className='main-route'>
            {this.props.main}
        </div>
    )
  }
}
