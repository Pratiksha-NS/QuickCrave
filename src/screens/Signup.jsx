import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [credentials, setcredentials] = useState({
        name:"",
        email: "",
        password: "",
        geolocation: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name:credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.geolocation
            })
        });
        const json = await response.json();
        console.log(json);

        if (!json.success){
            alert("Enter Valid Credentials");
        }
    }

    const handleChange = (event) =>{
        setcredentials({...credentials, [event.target.name]:event.target.value})
    }

    return (
        <div className='container' style={{ marginTop: "5%"}} >
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputname1" name='name' value={credentials.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={handleChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputaddress1" name='geolocation' value={credentials.geolocation} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary" style={{backgroundColor: "#E48F45"}} >Submit</button>
                <Link to="/login" className='m-3 btn btn-danger' style={{backgroundColor: "#6B240C"}} >Already a user</Link>
            </form>
        </div>
    )
}
