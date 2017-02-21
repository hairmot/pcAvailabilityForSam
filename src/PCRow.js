import React, { Component } from 'react';

class PCRow extends Component {

    render() {
        
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.count}</td>
            </tr>
        );
    }
}

export default PCRow;