import { useContext, useState } from "react";
import { Link, } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../firebase/firebase.config';
import { AuthContext } from './Providers/AuthProvider';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Swal from 'sweetalert2';


const Login = () => {

    const [logError, setLogError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [user, setUser] = useState(null);
    const facebookProvider = new FacebookAuthProvider();
    const { loggedInUser, handleGoogleSignIn, handleGoogleLogOut } = useContext(AuthContext);

    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch((error) => {
                console.error('Error signing in with Facebook:', error.message);
            });
    };

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loggedInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (password.length < 6) {
                    setLogError('Password should be at least 6 characters or longer');
                    return;
                } else if (!/[A-Z]/.test(password)) {
                    setLogError('Password should contain at least 1 capital letter');
                    return;
                } else if (!/[a-z]/.test(password)) {
                    setLogError('Password should contain at least 1 lowercase letter');
                    return;
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successful',
                        text: 'Welcome back!',
                        confirmButtonText: 'OK'
                    });
                }
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid email or password. Please try again.',
                    confirmButtonText: 'OK'
                });
            });
    };


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login now</h1>
                    </div>
                    <div className="card p-4 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" />
                                <span className="absolute top-2/3 right-5 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowPass(!showPass)}>
                                    {showPass ? <IoMdEyeOff /> : <IoMdEye />}
                                </span>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        {
                            logError && <p className="text-red-700">{logError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }
                        <div>
                            {user ?
                                <button onClick={handleGoogleLogOut}>Log Out</button> :
                                <div className='text-center'>
                                    <h2 className="text-lg font-medium text-center">LogIn With</h2>
                                    <div>
                                        <button className="btn btn-outline mr-2" onClick={handleGoogleSignIn}>
                                            <FaGoogle />
                                        </button>
                                        <button className="btn btn-outline" onClick={handleFacebookSignIn}>
                                            <FaFacebook />
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                        <p className="text-base p-4">New to the website? please <Link className='text-lg font-bold' to="/signup">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;