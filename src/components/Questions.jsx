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


export const Info = ({messages}) => {
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

    showLoader = () => (
        <div className="text-center">
            <iframe src="https://giphy.com/embed/IwSG1QKOwDjQk" id="loadFrame" frameBorder="0" className="giphy-embed" >
            </iframe>
        </div>
    );

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
        const {questions, messages, loading} = this.props.questionsReducer;
        return ( 
            <React.Fragment>
                {loading === true ? this.showLoader() :
                <table className="table table-striped table-hover ">
                    <thead>
                        <tr>
                        <div className="container"><th><big >Questions</big></th></div>
                        </tr>
                    </thead>
                    <tbody >
                        {questions && this.renderQuestions(questions)}
                        {messages && messages && <Info messages={messages}/>}
                    
                    </tbody>
                </table> }
            </React.Fragment>
         );
    }
}
 

export const mapStateToProps = ({questionsReducer}) => ({
    questionsReducer
});

export const mapDispatchToProps = dispatch => ({
    getQuestions: () => dispatch(questions()),
    getQuestion: questionId => dispatch(question(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);