import React, { Component }  from 'react';
import '../css/table.css';

import { Link } from 'react-router-dom';

class ParentView extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        
        
    }
    
    state = { 
        parent: {name: "Dvora", email:"email@email.com"},
        parentRows:[{key: "1", from: "10:12" ,to:"11:12",date:"May 2",},
        {key: "2", from: "10:12" ,to:"11:12",date:"May 2"},
        {key: "3", from: "10:12" ,to:"11:12",date:"May 2"},
        {key: "4", from: "10:12" ,to:"11:12",date:"May 2"},
        ]
      }

    render() { 
        console.log(this.state);

        const header = ["Action", "Total", "To","From" ,"Date" ];

        return ( 
            <div>
                <div class="linkBtn">Back to parents list</div>
                <div class="linkBtn">Mark as paid</div>
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
                                <td>B</td>
                                <td>A</td>
                                <td>{data.to}</td>
                                <td>{data.from}</td>
                                <td>{data.date}</td>
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

