import React, { Component } from 'react';


class Questions extends Component {
    state = {  
        questions: {}
    };

    componentWillMount(){
        
    }
    render() { 
        return ( 
            <React.Fragment>
                <table class="table table-striped table-hover ">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Column heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Column content</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Column content</td>
                        </tr>
                        <tr class="info">
                        <td>3</td>
                        <td>Column content</td>
                        </tr>
                    
                    </tbody>
                </table> 
            </React.Fragment>
         );
    }
}
 
export default Questions;