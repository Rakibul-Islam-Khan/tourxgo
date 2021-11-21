import React,{ useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/components/Footer/Footer';
import Header from '../Home/components/Header/Header';

const Signup = () => {
    const { signInWithGoogle, createAccountWithGoogle, setUsers, setIsLoading } = useAuth();
    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleGetEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleGetPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        createAccountWithGoogle(email, password)
            .then((res) => {
                setIsLoading(true)
                setUsers(res.user)
                history.push(url)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUsers(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };
    return (
        <>
            <Header />
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4"></div>
                    <form onSubmit={handleRegistration} className="col-md-4 my-5">
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" />
                            </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" onBlur={handleGetEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onBlur={handleGetPassword} className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFileMultiple" className="form-label">Upload your picture</label>
                            <input className="form-control" type="file" id="formFileMultiple" multiple />
                        </div>

                        <button onClick={handleRegistration} type="submit" className="btn btn-primary w-100">Signup</button>
                        <button onClick={handleGoogleLogin} type="submit" className="btn btn-light border w-100 my-2"><img src="https://i.ibb.co/ZMg1vmK/icons8-google-48.png" height='25' alt="" /> Signup with google</button>
                        <p className='text-center m-0'>Already have an account?
                            <Link to="/login" className='nav-link d-inline-block p-0 my-3'>Login
                            </Link>
                        </p>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
            <Footer />
        </>
    );
};

export default Signup;