import React from 'react';
import Funditem from './fundItem';

export default class Categoryaverage extends React.Component {
    render(){
        const category = this.props
        return(
            <td>
                <h1>{category}</h1>
            </td>
        )
    }
}