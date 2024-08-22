import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/user/signIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                alert('Logged in successfully');
                navigate('/')
                // You can perform further actions like redirecting the user
            } else {
                const errorData = await response.json();
                alert('Error logging in:', errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
        
            <Navbar />
        
            <section className="h-100 gradient-form">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                {/* You can add more content here if needed */}
                                            </div>

                                            <form onSubmit={handleSubmit}>
                                                <p>Please login to your account</p>

                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        id="form2Example11"
                                                        className="form-control"
                                                        placeholder="Email address"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <label className="form-label" htmlFor="form2Example11">
                                                        Email
                                                    </label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        id="form2Example22"
                                                        className="form-control"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <label className="form-label" htmlFor="form2Example22">
                                                        Password
                                                    </label>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <button type="submit" className="btn btn-outline-danger">
                                                        Login
                                                    </button>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <button type="button" className="btn btn-outline-danger">
                                                        <Link to={'/signup'}>Create New</Link>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        {/* Add content here if needed */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
