  import { useState } from "react";

  const Register = () => {
    const [data, setData] = useState({
      fullname: '',
      phoneNumber: '',
      email: '',
      address: '',  
      image: null,
    });

    const handleChange = (e) => {
      if (e.target.name === "image") {
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
    e.preventDefault()
        const formData = new FormData();

            formData.append('fullname', data.fullname)
            formData.append('phone', data.phoneNumber)
            formData.append('email', data.email)
            formData.append('address', data.address)
            formData.append ('image', data.image) 


            try {
              const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                body:formData
              });
            if(!response.ok){
            const result = await response.json()
            throw new Error('error');
            console.log(result)
            }

            const result = await response.json()
            alert('operation  processing..')
            } catch (error) {
              console.log(error)
            }
  }
  
    return (
      <>
        <form onSubmit={register}>
          <div className="form-wrapper">

          <label htmlFor="image">Profile Image</label>
          <input type="file" name="image" id="image" onChange={handleChange} />
          <div>
            <p>personal Informations</p>
            </div>
            <div className="personal-info">  
            <div className="input-wrapper">
            <label htmlFor="fullname">Fullname</label>
            <input type="text" name="fullname" id="fullname" onChange={handleChange} />
            </div>

            <div className="input-wrapper">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" name="phoneNumber" id="phoneNumber" onChange={handleChange} />
            </div>

            <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} />
            </div>

            <div className="input-wrapper">
              
            <label htmlFor="address">Address</label>
            <textarea name="address" id="address" onChange={handleChange}></textarea>
            </div>
            </div>
            
          
            <button type="submit">Register</button>
          </div>

            
        </form>
      </>
    );
  };

  export default Register;
