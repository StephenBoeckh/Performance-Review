import React from 'react';
import Funddropdown from './funddropdown';

export default class Selectfund extends React.Component {
    render(){
        return(
            <div>
                <Funddropdown company={this.props.match.params.company} />
            </div>
        )
    }
}