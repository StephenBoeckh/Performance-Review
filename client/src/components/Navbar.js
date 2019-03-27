import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component{
    render() {
        return (
            <nav className='navbar'>
                <h1>Performance Review</h1>
                <div className='navbar__links'>
                    <div>
                        <Link to="/Home">
                            <h4 className='nav__item'>Home</h4>
                        </Link>
                    </div>
                    <div>
                        <Link to="/disclaimer">
                            <h4 className='nav__item'>About</h4>
                        </Link>
                    </div>
                    <div>
                        <Link to="/selection/company">
                            <h4 className='nav__item'>Select Funds</h4>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}
