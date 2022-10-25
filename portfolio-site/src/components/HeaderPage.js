import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderPage = () => (
    <header>
        <h1>Portfolio</h1>
        <div>
            <NavLink to="/" activeClassName="" >Home</NavLink>
        </div>
        <div>
            <NavLink to="/portfolio" activeClassName="" >Portfolio</NavLink>
        </div>
        <div>    
            <NavLink to="/contact" activeClassName="">Contact</NavLink>
        </div> 
    </header>
);

export default HeaderPage;