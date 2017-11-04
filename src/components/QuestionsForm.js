import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addQuestion } from '../actions';

class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            language: ''
        };
        this.addQuestion = this.addQuestion.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    addQuestion(event) {
        event.preventDefault();
        this.props.addQuestion(this.state);
        this.setState({
            title: '',
            body: '',
            language: ''
        });
    }

    updateTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    updateBody(event) {
        this.setState({
            body: event.target.value
        });
    }

    updateLanguage(event) {
        this.setState({
            language: event.target.value
        });
    }

    render() {
        return (
            <div className="QuestionForm">
                <form onSubmit={this.addQuestion}>
                    <input
                       onChange={this.updateTitle}
                       placeholder="Title"
                       value={this.state.title}
                    />
                    <input
                        onChange={this.updateBody}
                        placeholder="Body"
                        value={this.state.body}
                    />
                    <input
                        onChange={this.updateLanguage}
                        placeholder="Language"
                        value={this.state.language}
                    />
                    <button type="submit">Submit Question</button>
                </form>
            </div>        
        );
    }
}

export default connect(null, { addQuestion })(QuestionForm);