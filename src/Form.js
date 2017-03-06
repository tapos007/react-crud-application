import React, {Component} from 'react';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.addStudent = this.addStudent.bind(this);
    }

    addStudent(){
        var name  = this.refs.name.value;
        var email  = this.refs.email.value;
        //alert(name + " "+email);
        this.props.addStudent(name,email);
        this.refs.name.value = "";
        this.refs.email.value = "";
        return false;

    }

    render() {
        return (
            <div className="col-md-6">
                <form className="form-horizontal">

                    <div className="form-group">
                        <label for="inputPassword3" className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" ref="name" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword3" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" ref="email" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" onClick={this.addStudent} className="btn btn-default">Add Student</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


