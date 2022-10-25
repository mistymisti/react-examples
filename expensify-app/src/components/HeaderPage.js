import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderPage = () => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink to="/" activeClassName="" >Home</NavLink>
        </div>
        <div>
            <NavLink to="/create" activeClassName="" >Create</NavLink>
        </div>
        <div>    
            <NavLink to="/edit" activeClassName="">Edit</NavLink>
        </div>
        <div>
            <NavLink to="/help" activeClassName="">Help</NavLink>
        </div>
    </header>
);

export default HeaderPage;