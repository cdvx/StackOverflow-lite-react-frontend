import React, { Component } from 'react';
import { connect } from "react-redux";
import questions from "../actions/questionsAction";

export const Question = ({question}) => {
    return (  
        <React.Fragment >
            <blockquote id="blockQ">
                <p className="text-black" ><strong>Topic: </strong>{question.topic}</p>
                <p id="text-body1">{question.body}</p>
                <small  className="text-black"><strong>Author: </strong>{question.author}</small>
            </blockquote>
        </React.Fragment>
    );
}


const Info = ({messages}) => {
    return (  
        <React.Fragment>
            <tr className="info">
            <td>message</td>
            <td>{messages}</td>
            </tr>
        </React.Fragment>
    );
}

class Questions extends Component {
    state = {  
        questions: [],
        messages: ""
    };

    componentWillMount(){
        const {getQuestions} = this.props;
        getQuestions();
    }

    handleQuestionClick =  questionId => {               
        localStorage.setItem("questionId", questionId);
    }

    renderQuestions = questions => (questions.map(question=>{
        return (
        <React.Fragment>
                <tr >
                <td id="quest"><a id="select-question" href="/question" onClick={()=>(this.handleQuestionClick(question.questionId))}><Question question={question} /></a></td>
                </tr>
                <div id="space-this"></div>

        </React.Fragment>
        )
    }));
    render() { 
        const {results, messages} = this.props;
        console.log("props here>>", this.props, results, messages)
        return ( 
            <React.Fragment>
                <table className="table table-striped table-hover ">
                    <thead>
                        <tr>
                        <div className="container"><th><big >Questions</big></th></div>
                        </tr>
                    </thead>
                    <tbody>
                        {results && this.renderQuestions(results)}
                        {messages && <Info messages={messages}/>}
                    
                    </tbody>
                </table> 
            </React.Fragment>
         );
    }
}
 

export const mapStateToProps = ({questions}) => ({
    results: questions.questions,
    messages: questions.messages
});

export const mapDispatchToProps = dispatch => ({
    getQuestions: () => dispatch(questions()),
    getQuestion: questionId => dispatch(question(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);