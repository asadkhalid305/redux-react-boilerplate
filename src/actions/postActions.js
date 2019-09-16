import { FETCH_POSTS, NEW_POSTS } from './types'
import Axios from 'axios';


export const fetchPosts = () => dispatch => {
    Axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => dispatch({
            type: FETCH_POSTS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const newPost = post => dispatch => {
    Axios.post('https://jsonplaceholder.typicode.com/posts', post)
        .then(res => dispatch({
            type: NEW_POSTS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}