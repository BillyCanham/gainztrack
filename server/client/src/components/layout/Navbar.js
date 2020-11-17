import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({title, icon}) => {
    return (
        <nav className="navbar bg-primary">
        <h2 className='text-primary text-white'><i class="fas fa-chart-line"></i> GAINZTRACK</h2>
        <ul>
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/about'>About</Link>
          </li>
          </ul>
            
            
                </nav>     
           

        

        
        
    )
}

export default Navbar