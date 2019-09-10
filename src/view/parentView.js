import React, { Component }  from 'react';
import '../css/table.css';
import Axios from 'axios';
import { set } from 'mongoose';

// import { Link } from 'react-router-dom';
// import AddRowForParent from '.view/input/addParentRows';

class ParentView extends Component {
    constructor(props) {
        super(props);
    }
    
    state = { 
        parent: {name: "Dvora", email:"email@email.com"},
        parentRows:[{key: "1", from: "10:12" ,to:"11:12",date:"May 2",},
        {key: "2", from: "10:12" ,to:"11:12",date:"May 2"},
        {key: "3", from: "10:12" ,to:"11:12",date:"May 2"},
        {key: "4", from: "10:12" ,to:"11:12",date:"May 2"},
        ]
      }
componentDidMount(){
    
    Axios.get("http://localhost:4000/parentRowsView/5d53fd3ad7a15c35989e7d72")
    .then(rows=>{
        this.setState({parentRows: rows.data})
    })
}
    render() { 
        console.log(this.state);

        const header = ["Date", "From" ,  "To", "Total","Action" ];

        return ( 
            
            <div>
                <div className="linkBtn gray">Back to parents list</div>
                <div className="linkBtn">Mark as paid</div>
                <h3 className="align-left">Parent name: {this.state.parent.name}</h3>

                <table className="table">
                    <thead>
                        <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.state.parentRows).map((k, i) => {
                        let data = this.state.parentRows[k];
                        return (
                            <tr key={i}>
                                <td>{data.date}</td>
                                <td>{data.from}</td>
                                <td>{data.to}</td>
                                <td>A</td>
                                <td>B</td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>

                <h3  className="align-left">Total Time: 21..</h3>
                <h3  className="align-left">Total Sum: 25..</h3>
                
            </div>
         );
    }
}
 
export default ParentView;

