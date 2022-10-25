import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
            This is a portfolio page
        <div>
            <NavLink to="/portfolio/1">Item 1</NavLink>
        </div>
        <div>
            <NavLink to="/portfolio/2">Item 2</NavLink>
        </div>
    </div>
);

export default PortfolioPage;