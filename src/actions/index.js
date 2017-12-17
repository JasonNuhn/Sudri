import axios from 'axios';

export const ADD_POST = 'ADD_POST';
export const ADD_USER = "ADD_USER";
//export const GET_POST = 'GET_POST';

export const addPost = (post) => {
    const promise = axios.post('http://localhost:3000/posts', post);
    return {
        type: ADD_POST,
        payload: promise
    };
};

export const addUser = (newUser) => {
    const promise = axios.post('http://localhost:3000/Signup', newUser);
    return {
        type: ADD_USER,
        payload: promise
    };
};