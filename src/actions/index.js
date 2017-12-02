import axios from 'axios';

export const ADD_POST = 'ADD_POST';

export const addPost = (post) => {
    const promise = axios.post('http://localhost:3000/posts', post);
    return {
        type: ADD_POST,
        payload: promise
    };
};
