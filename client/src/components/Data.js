import React from 'react';
import axios from 'axios';

export default class Data extends React.Component {
    render(){
        return (
            <div>
                <thead>
                    <tr>
                        <th>Fund</th>
                        <th>Fund Company</th>
                        <th>Category</th>
                        <th>2018</th>
                        <th>2017</th>
                        <th>2016</th>
                        <th>2015</th>
                        <th>2014</th>
                    </tr>
                </thead>
            </div>
        )
    }
}