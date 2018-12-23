import React, { Component } from 'react';
import {connect} from "react-redux";
import askQuestion from "../actions/postQuestionActions";


// const QuestionModal = ({children}) => {
//     return ( 
//         <div class="modal">
//         <div class="modal-dialog">
//             <div class="modal-content">
//             <div class="modal-header">
//                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
//                 <h4 class="modal-title">Ask Question</h4>
//             </div>
//             <div class="modal-body">
//                 {children}
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
//                 <button type="button" class="btn btn-primary">Save changes</button>
//             </div>
//             </div>
//         </div>
//         </div>
//      );
// }


class PostQuestion extends Component {
    state = {  
        topic: "",
        body: ""
    }

    postQuestion = event => {
        event.preventDefault();
        const {topic, body} = this.state;
        console.log(".....>", topic, body);
        this.props.postQuestion({
            topic,
            body
        });
      };
    

    onChangeField = (event, fieldType) => {
        event.preventDefault();
        this.setFieldToState(event, fieldType);
    }

    setFieldToState = (event, fieldType) => {
        fieldType === "topic" ? this.setState({
            topic: event.target.value }) : fieldType === "body" && this.setState({
                body: event.target.value })
    };

    render() { 
        return ( 
            <React.Fragment>
                
                <div id="signup" className="container">
                <form className="form-horizontal" >
                    <fieldset>


                        <legend>Post Question</legend>
                        <div className="form-group">
                            <label htmlFor="inputTopic" className="col-lg-2 control-label">Topic</label>
                            <div className="col-lg-10">
                                <input type="text" required onChange={()=>(this.onChangeField(event, "topic"))}
                                    className="form-control" id="inputTopic" placeholder="Topic"  />
                            </div>
                        </div>

                        {/* <div className="form-group">
                            <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                            <div className="col-lg-10">
                                <input type="password" 
                                    required={true}
                                    onChange={()=>(this.onChangeField(event, "password"))}
                                    className="form-control" id="inputRepeatPassword" placeholder="Password" />
                            <div className="checkbox">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            </div>
                        </div>*/}
                        {/* </div>  */}
                        <div className="form-group">
                        <label htmlFor="textArea" class="col-lg-2 control-label">Body</label>
                        <div className="col-lg-10">
                            <textarea 
                                onChange={()=>(this.onChangeField(event, "body"))}
                                className="form-control" rows="3" id="textArea"></textarea>
                            <span className="help-block">The body can be as long as you please.</span>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-10 col-lg-offset-2">
                                {/* <button type="reset" className="btn btn-default">Cancel</button> */}
                                <button 
                                    onClick={this.postQuestion}
                                    type="submit" className="btn btn-primary mt-4">Post Question</button>
                            </div>
                        </div>
                        </div>
                    </fieldset>
                </form>
          
                </div>
                
            </React.Fragment>
         );
    };
};

export const mapStateToProps = state => state;

export const mapDispatchToProps = dispatch => ({
    postQuestion: questionData => dispatch(askQuestion(questionData))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostQuestion);