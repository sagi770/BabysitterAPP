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
        parentRows:[{key: "1", from: "1from date" ,to:"To date",},
            {key: "2", from: "2from date" ,to:"To date"},
            {key: "3", from: "3from date" ,to:"To date"},
            {key: "4", from: "4from date" ,to:"To date"}
        ]
      }

    render() { 
        console.log(this.state);

        const header = ["Action", "Total", "To","From" ];

        return ( 
            <div>
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
                            </tr>
                        );
                        })}
                    </tbody>
                </table>

                <h3  className="align-left">Total Time: 21..</h3>
            </div>
         );
    }
}
 
export default ParentView;

