import React, { Component } from 'react';
import Axios from 'axios';
import Companylist from './companylist';

export default class Companydropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      company: []
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
  
  // closeMenu() {
    
  //   this.setState({ showMenu: false }, () => {
  //     document.removeEventListener('click', this.closeMenu);
  //   });
    
  componentDidMount(){
    Axios.get('http://localhost:8080/fundlists/company')
        .then(result => {
        this.setState({
            company: result.data
            })
        })
    }

    render() {
      const companyList = this.state.company.map(((item, index) => {
          return <Companylist
          key={index}
          company={item.company}
          />
    }));
    return (
        
      <div>
        <button onClick={this.showMenu}>
          Select Company
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
                    {companyList}
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