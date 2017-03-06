import React, {Component} from 'react';
import Form from './Form';
import Table from './Table';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.addStudent = this.addStudent.bind(this);

        this.state = {
            students : [{name:"safsdf",email:"safsdfdfsfds"}]
        };
    }

    addStudent(name,email){
        var student  = this.state.students;
        student.push({name:name,email:email});
        this.setState({students:student});
    }

    render() {
        return (
            <div>
                <Form addStudent={this.addStudent} />
                <Table  student={this.state.students}/>

            </div>
        );
    }
}
