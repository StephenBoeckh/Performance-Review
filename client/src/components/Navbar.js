import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component{
    render() {
        return (
            <nav className='navbar'>
                <div className='navbar__links'>
                    <div>
                        <Link to="/Home">
                            <h3>Home</h3>
                        </Link>
                    </div>
                    <div>
                        <Link to="/disclaimer">
                            <h3>Disclaimer</h3>
                        </Link>
                    </div>
                    <div>
                        <Link to="/selection/company">
                            <h3>Selection</h3>
                        </Link>
                    </div>
                    <div>
                        <Link to="/fundlists/individual/:id">
                            <h3>Data</h3>
                        </Link>
                    </div>
                    <div>
                        <Link to="/context">
                            <h3>Context</h3>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}
