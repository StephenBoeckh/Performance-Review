import React, { Component } from 'react';
import Axios from 'axios';
import Funds from './fundlist';

export default class Funddropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      companyfunds: []
    };
    
    this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
//   closeMenu() {
    
//     this.setState({ showMenu: false }, () => {
//       document.removeEventListener('click', this.closeMenu);
//     });
    
//   }
  componentDidMount(){
    const find = this.props.company;
    const getFunds = `http://localhost:8080/fundlists/${find}`
    Axios.get(getFunds)
        .then(result => {
        this.setState({
            companyfunds: result.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
      const companyFunds = this.state.companyfunds.map(((item, index) => {
          return <Funds
          key={index}
          id={item.id}
          companyfunds={item.name}
          />
          
    }));
    return (
        
      <div>
        <button onClick={this.showMenu}>
          Select Fund
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <ul>
                    {companyFunds}
                </ul>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}