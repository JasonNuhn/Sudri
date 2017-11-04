export const ADD_QUESTION = 'ADD_QUESTION';

export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        payload: question
    };
};
