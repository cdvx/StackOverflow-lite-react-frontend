import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Question} from "./Questions";
import question from "../actions/questionAction";

class ShowQuestion extends Component{
    state = {
        question: {}
    };

    componentWillMount(){
        const {getQuestion} = this.props;
        const questionId = localStorage.getItem("questionId");
        getQuestion(questionId);
    }

    render(){
        
        const {question} = this.props;
        return (
            <React.Fragment>
                <table className="table table-striped table-hover ">
                    <thead>
                        <tr>
                        <div className="container"><th><big >Question</big></th></div>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                        <td id="quest"><Question question={question.question} /></td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
};

export const mapStateToProps = questionReducer => ({
    question: questionReducer.question
});

export const mapDispatchToProps = dispatch => ({
    getQuestion: questionId => dispatch(question(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowQuestion);