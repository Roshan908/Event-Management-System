import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from 'axios'
import SuccessModal from "../utils/modal/SuccessModal";

const Auth = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_KEY}user/register`, formData)
            .then((result) => setShowSuccessModal(true))
            .catch(err => console.log(err))
    };
    return (
        <>
            <Navbar />
            {showSuccessModal === true ? (
                <SuccessModal setShowSuccessModal={setShowSuccessModal} showSuccessModal={showSuccessModal} />
            ) : (
                <section className="bg-gray-50" style={{ marginTop: '8rem' }}>
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-sm border-0 rounded-lg">
                                    <div className="card-body p-4 p-sm-5">
                                        <h1 className="h2 mb-4 fw-bold text-gray-900 text-center">
                                            Create an account
                                        </h1>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="name"
                                                    className="form-label text-gray-900"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    // type="string"
                                                    className="form-control rounded-lg"
                                                    id="name"
                                                    name="name"
                                                    // value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="name"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="email"
                                                    className="form-label text-gray-900"
                                                >
                                                    Your email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control rounded-lg"
                                                    id="email"
                                                    value={formData.email}
                                                    name="email"
                                                    onChange={handleInputChange}
                                                    placeholder="name@abc.com"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="password"
                                                    className="form-label text-gray-900"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control rounded-lg"
                                                    id="password"
                                                    value={formData.password}
                                                    name="password"
                                                    onChange={handleInputChange}
                                                    placeholder="••••••••"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3 form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="terms"
                                                    // checked={formData.acceptedTerms}
                                                    // onChange={handleInputChange}
                                                    required
                                                />
                                                <label
                                                    className="form-check-label text-gray-900"
                                                    htmlFor="terms"
                                                >
                                                    I accept the{" "}
                                                    <a
                                                        href="1"
                                                        className="text-primary"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Terms and Conditions
                                                    </a>
                                                </label>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg rounded-lg w-100"
                                            >
                                                Create an account
                                            </button>
                                            <p className="mt-3 text-center">
                                                Already have an account?{" "}
                                                <a href="1" className="text-primary">
                                                    Login here
                                                </a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <Footer />
        </>
    );
};

export default Auth;
