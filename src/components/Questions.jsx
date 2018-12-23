import React, { Component } from 'react';
import { connect } from "react-redux";
import questions from "../actions/questionsAction"

const Question = ({question}) => {
    return (  
        <React.Fragment >
            <blockquote>
                <p className="text-primary" ><strong>Topic: </strong>{question.topic}</p>
                <p >{question.body}</p>
                <small  className="text-success"><strong>Author: </strong>{question.author}</small>
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
        const {getQuestions, results, messages} = this.props;
        getQuestions()
        console.log("questioms here>.>", results, messages)
        this.setState({
            questions: results,
            messages
        })

    }

    renderQuestions = questions => (questions.map(question=>{
        
        return (
        <React.Fragment>
            <tr >
            <td ><Question question={question} /></td>
            </tr>
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
                        <div className="container"><th><big className="text-primary">Questions</big></th></div>
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
    getQuestions: () => dispatch(questions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);