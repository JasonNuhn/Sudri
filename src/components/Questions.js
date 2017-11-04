import React, { Component } from 'react';


import Question from './Question';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    // componentDidMount() {
    //     const questions = this.props.getQuestions();
    //     console.log(questions)
    //     this.setState({
    //         questions
    //     })
    //     console.log(this.state)
    // }

    render() {
        return (
            <div className="Questions">
                {/* <h1>Questions</h1> */}
                <ul>
                    { this.props.questions.map((question, i) => {
                        return <Question title={question.title} body={question.body} language={question.language} key={i} />;
                    })}
                </ul> 
            </div>   
        );
    }
}

export default Questions;