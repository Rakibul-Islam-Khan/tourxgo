import React, { useState} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/components/Footer/Footer';
import Header from '../Home/components/Header/Header';

const Login = () => {
    const { signInWithGoogle, setUsers, loginWithEmailAndPassword, setIsLoading } = useAuth();
    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleGetEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleGetPassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();

        loginWithEmailAndPassword(email, password)
            .then((result) => {
                setIsLoading(true)
                setUsers(result.user);
                history.push(url)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            }).finally(() => {
                setIsLoading(false)
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                setIsLoading(true)
                setUsers(result.user)
                history.push(url)
            }
            ).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            }).finally(() => {
                setIsLoading(false)
            })
    };

    return (
        <>
            <Header/>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 my-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onBlur={handleGetEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onBlur={handleGetPassword} className="form-control" id="exampleInputPassword1" required />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                            </div>
                            <button onClick={handleLoginWithEmailAndPassword} type="submit" className="btn btn-primary w-100">Login</button>
                            <button onClick={handleGoogleLogin} type="submit" className="btn btn-light border w-100 my-2"><img src="https://i.ibb.co/ZMg1vmK/icons8-google-48.png" height='25' alt="" /> Login with google</button>
                            <p className='text-center m-0'>Don't have an account? <Link to="/signup" className='nav-link d-inline-block p-0 my-3'>Sign Up</Link></p>
                            <a className='text-center nav-link p-0'>Forget password?</a>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        <Footer/>
        </>
    );
};

export default Login;