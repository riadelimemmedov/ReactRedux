//!React
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { createPost } from '../actions/postactions.js'


//!PostForm
class PostForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title:'',
      body:''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name] : e.target.value})
  }


  onSubmit(e){
    e.preventDefault()

    const post = {
      title:this.state.title,
      body:this.state.body
    }

    //Call Action create posts 
    this.props.createPost(post)
  }

  render() {
    return (
      <>
        <div>
          <h1 style={{color:'blue'}}>Add Post</h1>
          {this.state.title}
          {this.state.body}

          <form method="POST" onSubmit={this.onSubmit}>
            <div>
              <label id="title">Title: </label><br/>
              <input type="text" name="title" value={this.state.title} onChange={this.onChange} required/>
            </div>
            <br/>
            <div>
              <label id="body">Title: </label><br/>
              <textarea name="body" value={this.state.body} onChange={this.onChange} required/>
            </div>
            <br/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    )
  }
}

PostForm.prototypes = {
  createPost : PropTypes.func.isRequired
}

export default connect(null,{createPost})(PostForm)
