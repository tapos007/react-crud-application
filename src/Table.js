import React, {Component} from 'react';

export default class App extends Component {

    constructor() {
        super();

    }

    render() {
        return (
            <div className="col-md-6">
                { this.props.student.length>0 ?
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.student.map((x,i)=>(
                            <tr>
                                <td>{(i+1)}</td>
                                <td>{x.name}</td>
                                <td>{x.email}</td>
                            </tr>
                        ))}

                        </tbody>
                    </table> : "<h1>no data found</h1>"}


            </div>
        );
    }
}


