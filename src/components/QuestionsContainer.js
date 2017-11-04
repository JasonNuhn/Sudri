import React from 'react';
import { connect } from 'react-redux';

import Questions from './Questions';

const QuestionsContainer = (props) => {
    return (
        <Questions />
    );
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps)(Questions);