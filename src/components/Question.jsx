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

    showLoader = () => (
        <div className="text-center">
            <iframe src="https://giphy.com/embed/IwSG1QKOwDjQk" id="loadFrame" frameBorder="0" class="giphy-embed" >
            </iframe>
        </div>
    );

    render(){
        
        const {question, loading} = this.props.questionReducer;

        return (
            <React.Fragment>
                {loading === true ? this.showLoader() :
                <table className="table table-striped table-hover ">
                    <thead>
                        <tr>

                        <div className="container"><th><big>Question</big></th></div>

                        </tr>
                    </thead>
                    <tbody >
                        <tr >
                        <td id="quest"><Question question={question} /></td>

                        </tr>
                    </tbody>
                </table>}
            </React.Fragment>
        );
    }
};

export const mapStateToProps = ({questionReducer}) => ({
    questionReducer
});

export const mapDispatchToProps = dispatch => ({
    getQuestion: questionId => dispatch(question(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowQuestion);