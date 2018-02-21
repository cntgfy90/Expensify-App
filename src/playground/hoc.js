// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const widthAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info, please, don't share</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ?
                <WrappedComponent {...props} /> :
                <p>Please, log in first to see something!</p>
            }
        </div>
    );
}

const AdminInfo = widthAdminWarning(Info);
const Authentication = requireAuthentication(Info);

// ReactDOM.render(
//     <AdminInfo isAdmin={true} info="These are details" />,
//     document.getElementById('app')
// );

ReactDOM.render(
    <Authentication isAuthenticated={true} info="These are details" />,
    document.getElementById('app')
);