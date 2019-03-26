import React from 'react';
import Axios from 'axios';
import Categoryaverage from './categoryaverage';

export default class Data extends React.Component {
    state = {
        fund: [],
        average: []
    }

    componentDidMount(){
        const getFundURL = `http://localhost:8080/individual/${this.props.id}`;
        Axios.get(getFundURL)
          .then(result => {
              this.setState({
                  fund:result.data
              })
            return Axios.get(`http://localhost:8080/fundlists/company/${result.data.category}`)
            .then(result => {
                console.log(result)
                this.setState({
                    average: result.data
                })
            })
            
            })
    }
    
    render(){
        const fund = this.state.fund
        const average = this.state.average
        return (
            <div>
                <table>
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
                    <tbody>
                        <tr>
                            <td>{fund.name}</td>
                            <td>{fund.company}</td>
                            <td>{fund.category}</td>
                            <td>{fund.yeara}</td>
                            <td>{fund.yearb}</td>
                            <td>{fund.yearc}</td>
                            <td>{fund.yeard}</td>
                            <td>{fund.yeare}</td>
                        </tr>
                        <tr>
                            <td>{average.name}</td>
                            <td>{average.company}</td>
                            <td>{average.category}</td>
                            <td>{average.yeara}</td>
                            <td>{average.yearb}</td>
                            <td>{average.yearc}</td>
                            <td>{average.yeard}</td>
                            <td>{average.yeare}</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        )
    }
}