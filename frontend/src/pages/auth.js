import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <>
            <Navbar />
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
                                                htmlFor="email"
                                                className="form-label text-gray-900"
                                            >
                                                Your email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control rounded-lg"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="name@company.com"
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
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="••••••••"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="confirm-password"
                                                className="form-label text-gray-900"
                                            >
                                                Confirm password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control rounded-lg"
                                                id="confirm-password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder="••••••••"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="terms"
                                                checked={acceptedTerms}
                                                onChange={(e) => setAcceptedTerms(e.target.checked)}
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
            <Footer />
        </>
    );
};

export default Auth;
