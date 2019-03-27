import React from 'react';
import Companydropdown from './companydropdown';

export default class Selectcompany extends React.Component {
    render(){
        return (
            <div className='company__div'>
                <Companydropdown/>
            </div>
        )
    }
}