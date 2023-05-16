import {FETCH_POSTS,NEW_POST} from './types.js'


//!fetchPost
export const fetchPost = () => dispatch => {
    console.log('Fetch posts ')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => dispatch({
            type:FETCH_POSTS,
            payload:posts 
    }))
}

//!createPost
export const createPost = (postData) => dispatch => {
    console.log('Create post')
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers : {
        'content-type': 'application/json'
        },
        body : JSON.stringify(postData)
    })
    .then((response) => response.json())
    .then((post) => dispatch({
        type:NEW_POST,
        payload:post 
    }))
}

