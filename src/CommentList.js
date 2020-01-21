import React, { Component } from 'react'
import Comment from './Comment'


class CommentList extends Component {
  static defauleProps={
    comments:[]
  }
  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={comment.id} />)}
      </div>
    )
  }
}

export default CommentList