import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const HeaderPage = ({ startLogOut }) => (
    <header>
        <h1>BoilderPlate React App</h1>
        <div>
            <NavLink to="/dashboard" activeClassName="" >Home</NavLink>
        </div>
        <div>
            <NavLink to="/create" activeClassName="" >Create</NavLink>
        </div>
        <div>    
            <NavLink to="/edit" activeClassName="">Edit</NavLink>
        </div>
        <button onClick= { startLogOut }>LogOut</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(HeaderPage);