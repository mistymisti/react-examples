//Higher Order Component - a component tath renders other component
//Reuse code
//Render hijacking
//Prop manipulation
//Abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
   <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const withAdminComponent = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is a private message !! Please do not share</p> } 
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props}/> : <p>You will require to authenticate for this view !!</p> }
        </div>
    );
};

const AdminInfo = withAdminComponent(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="this is a sample info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is a sample info" />, document.getElementById('app'));