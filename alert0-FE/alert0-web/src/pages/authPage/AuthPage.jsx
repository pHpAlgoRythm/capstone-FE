import React from "react";
import Register from "../../components/Registration";

function AuthPage() {

    return (
        <>
            <Register
                title="Register"
                email={{ label: 'Email', type: 'email' }}
                password={{ label: 'Password', type: 'password' }}
                fullname={{ label: 'Full Name', type: 'text' }}
                address={{ label: 'Address', type: 'text' }}
                phone_number={{ label: 'Phone', type: 'tel' }}
                profile={{ label: 'Profile Image', type: 'file' }}
            />
       
        </>
    );
}

export default AuthPage;
