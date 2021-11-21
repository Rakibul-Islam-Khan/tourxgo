import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Header = () => {    
    const {users, logOut} = useAuth()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/home"><img src="https://i.ibb.co/QN58Q7f/foot.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                          { !users.email ? <>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/packages">Packages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li> 
                          </>:
                          <>
                          <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/packages">Packages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to="/mypackage">My Package</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addpackage">Add New Package</Link>
                            </li>
                          </>
                            }
                        </ul>
                        <div className="d-flex align-items-center">
                        {!users.email ? <>
                        <Link to='/login'>
                        <button className='btn btn-primary me-lg-4'>Login</button>
                        </Link>
                         <Link to="/signup">
                         <button className='btn btn-primary'>Sign up</button>
                         </Link> 
                        </>
                        :
                        <>
                        <> {users.displayName ?
                        <span className="text-light">Sign in as: <span className='text-danger'>{users?.displayName}</span></span>:
                        <span className="text-light">Sign in as: <span className='text-danger'>{users.email}</span></span>
                        }
                        </>
                        { users.photoURL ?
                            <img style={{borderRadius:"50%", marginLeft:"20px",border:"3px solid white"}} src={users?.photoURL} height="40"/>:
                            ""
                        }
                        <Link to='/login'>
                        <button onClick={logOut} className='btn btn-primary ms-lg-5'>Logout</button>
                        </Link>
                        </>
                        }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;