import { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    fullname: '',
    phoneNumber: '',
    email: '',
    address: '',  
    image: null
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      // Handle image file separately
      setData({
        ...data,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };
  const register = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    const formData = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("email", data.email);
    formData.append("address", data.address);
    formData.append("image", data.image);

    const response = await fetch("http://localhost:8000/register", {
      method: 'POST',
      body: formData, // Using FormData to send the data, including the file
    });

    const result = await response.json();
    console.log(result); // You can handle the result here
  };
  return (
    <>
      <form onSubmit={register}>
        <div className="form-wrapper">
          <label htmlFor="fullname">Fullname</label>
          <input type="text" name="fullname" id="fullname" onChange={handleChange} />
          
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" name="phoneNumber" id="phoneNumber" onChange={handleChange} />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
          
          <label htmlFor="address">Address</label>
          <textarea name="address" id="address" onChange={handleChange}></textarea>
          
          <label htmlFor="image">Profile Image</label>
          <input type="file" name="image" id="image" onChange={handleChange} />
          
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};

export default Register;
