import {
    ADD_POST
} from '../actions';

const postsReducer = (posts = [], action) => {
    switch (action.type) {
        case ADD_POST:
            return posts.concat(action.payload);
        default:
            return posts;
    }
};
export default postsReducer