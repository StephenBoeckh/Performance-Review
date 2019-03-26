import React from 'react';

export default class Funditem extends React.Component {
    render(){
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.company}</td>
                <td>{this.props.category}</td>
                <td>{this.props.yeara}</td>
                <td>{this.props.yearb}</td>
                <td>{this.props.yearc}</td>
                <td>{this.props.yeard}</td>
                <td>{this.props.yeare}</td>
            </tr>
        )
    }
}