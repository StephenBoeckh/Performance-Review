import React from 'react';
import Data from './Data'

export default class IndividualFund extends React.Component {
    render(){
        return(
            <div>
                <Data id={this.props.match.params.id}/>
            </div>
        )
    }
}