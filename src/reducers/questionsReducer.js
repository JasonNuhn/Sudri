import {
    ADD_QUESTION
} from '../actions';

const questionsReducer = (questions = [], action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return questions.concat(action.payload);
        default:
            return questions;
    }
};
export default questionsReducer