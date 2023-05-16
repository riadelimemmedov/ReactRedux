//!React
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/postactions.js'
import PropTypes from 'prop-types';

//*Posts Components
class Posts extends Component {

    componentWillMount(){//Called before the component is mounted
        this.props.fetchPost()
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const postItems = this.props.posts.map((post,index)=>(
            <div key={index} style={{textAlign:'center'}}>
                <h3 style={{ textTransform: 'capitalize' }}>{post.title}</h3>
                <p>{post.body}</p>
                <hr/>
            </div>
        ))

        return (
            <>
                <h1 style={{color:'red'}}>Posts</h1>
                {postItems}
            </>
        );
    }
}

Posts.prototypes     = {
    fetchPost : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired, 
    newpPost : PropTypes.object
}

const mapStateToProps = state => ({
    posts : state.posts.items,
    newPost : state.posts.item
})

export default connect(mapStateToProps,{fetchPost})(Posts)//? "connect" is a higher-order function that is used to connect a React component to the Redux store.
