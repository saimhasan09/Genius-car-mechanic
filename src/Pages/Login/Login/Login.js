import React from 'react';
import useAuth from '../../../Hooks/useAuth';




const Login = () => {
    const { signInUsingGoogle } = useAuth();


    return (
        <div>
            <h2>Please log in</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">
                Google Sign in
            </button>
        </div>
    );
};

export default Login;