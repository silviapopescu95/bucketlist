import React, { Component } from "react";

import UserService from "../services/user.service";

import BucketLists from "./bucketlist.component";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>2021 Bucket List</h3>
        </header>
        <div><BucketLists></BucketLists></div>
      </div>
    );
  }
}