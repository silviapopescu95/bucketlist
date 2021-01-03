import React, { Component } from "react";

import UserService from "../services/user.service";

import BucketLists from "./bucketlist.component";

import bucketImage from "../images/bucketlist.png"

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
        <header className="jumbotron text-center">
          <h3 className="text-center">2021 Bucket List</h3>
          <img src={bucketImage} width="20%" height="20%" className="text-right"/>
        </header>
        <div><BucketLists></BucketLists></div>
      </div>
    );
  }
}