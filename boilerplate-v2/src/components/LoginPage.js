import React from 'react'
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth'; 

export const LoginPage = ({ startLogin }) => (
    <div>
        <h1>Boiler Plate App</h1>
            <button onClick={startLogin}>Login with Google</button>
        </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);