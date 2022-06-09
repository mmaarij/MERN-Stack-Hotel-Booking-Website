import React, { Component } from "react";
import "./SearchResult.css"

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likeCount: this.props.like,
      likeClicked: false,
      dislikeCount: this.props.dislike,
      dislikeClicked: false
    };
    this.onLikeClick = this.onLikeClick.bind(this);
    this.onDislikeClick = this.onDislikeClick.bind(this);
  }

  onLikeClick() {
    if (!this.state.likeClicked) {
      this.setState((prevState, props) => {
        return {
          likeCount: prevState.likeCount + 1,
          likeClicked: true
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likeCount: prevState.likeCount - 1,
          likeClicked: false
        };
      });
    }
  }

  onDislikeClick() {
    if (!this.state.dislikeClicked) {
      this.setState((prevState, props) => {
        return {
          dislikeCount: prevState.dislikeCount + 1,
          dislikeClicked: true
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          dislikeCount: prevState.dislikeCount - 1,
          dislikeClicked: false
        };
      });
    }
  }
  render() {
    return (
      <div className ="d-flex justify-content-center pb-3">

        <span className="likes-counter me-1">
          <button
            onClick={this.onLikeClick}
            className={`btn btn-outline-success btn-sm liked-button ${this.state.likeClicked ? "liked" : ""}`}
          >
            {" "}
            Like | {this.state.likeCount}{" "}
          </button>
        </span>

        <span className="dislikes-counter ms-1">
          <button
            onClick={this.onDislikeClick}
            className={`btn btn-outline-danger btn-sm dislike-button ${
              this.state.dislikeClicked ? "disliked" : ""
            }`}
          >
            {" "}
            Dislike | {this.state.dislikeCount}{" "}
          </button>
        </span>

      </div>
    );
  }
}