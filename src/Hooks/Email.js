import axios from 'axios';
import React from 'react'

const Email = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
      });
    
      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          email: data.email,
          password: data.password
        };
        axios
          .post("https://reqres.in/api/login", userData)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response);
              console.log("server responded");
            } else if (error.request) {
              console.log("network error");
            } else {
              console.log(error);
            }
          });
      };
    
  return (
<div>
      <h1>Login Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input type="email" name="email" value={data.email} onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" value={data.password} onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Email
