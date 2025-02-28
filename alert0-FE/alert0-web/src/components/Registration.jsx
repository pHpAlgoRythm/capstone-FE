import React from "react";
import { useNavigate } from "react-router-dom";

function Register({ title, email, password, fullname, address, phone_number, profile }) {
  
      const navigate =useNavigate();
      const handleLoginRedirect=() => {
          navigate('/AuthPage')
      }
     return (
    <form action="">
      <div className="reg-card">
        <div className="wrapper"> 

        <h2 className="title">{title}</h2>
        {email && (
          <>
            <label htmlFor="email">{email.label}</label>
            <input type={email.type} id="email" />
          </>
        )}

        {password && (
          <>
            <label htmlFor="password">{password.label}</label>
            <input type={password.type} id="password" />
          </>
        )}

        {fullname && (
          <>
            <label htmlFor="fullname">{fullname.label}</label>
            <input type={fullname.type} id="fullname" />
          </>
        )}

        {address && (
          <>
            <label htmlFor="address">{address.label}</label>
            <textarea id="address"></textarea>
          </>
        )}

        {phone_number && (
          <>
            <label htmlFor="phone_number">{phone_number.label}</label>
            <input type={phone_number.type} id="phone_number" />
          </>
        )}

        {profile && (
          <>
            <label htmlFor="profile">{profile.label}</label>
            <input type={profile.type} id="profile" />
          </>
        )}
             <button onClick={handleLoginRedirect}>Go to Login</button>
        </div>
      </div>
    </form>
  );
}
 
Register.defaultProps = {
  title: "Registration",
  email: { label: "Email", type: "email" },
  password: { label: "Password", type: "password" },
  fullname: { label: "Full Name", type: "text" },
  address: { label: "Address", type: "text" },
  phone_number: { label: "Phone Number", type: "tel" },
  profile: { label: "Profile Image", type: "file" },
};

export default Register;
