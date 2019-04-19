//Higher Order Component (HOC) A component that renders another component
//The goal is to reuse code

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return(<div>
        <h1>Info</h1>
        <p> Loot the {props.info}</p>
    </div>)
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>Warning Message: this is special magic</p>}
            <WrappedComponent { ...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isLoggedIn ? (
                <div>
                    <p>Please become a deer. </p>
                    <WrappedComponent {...props} />
                </div> 
                ) : <p>Please log in.</p>}
        </div>
    )
}



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isLoggedIn={true} info="boot" />, document.getElementById('app'));