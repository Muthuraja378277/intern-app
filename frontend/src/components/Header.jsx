import React, { useState } from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from './firebase/firebase.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../Feature/Userslice.js';
import { useNavigate } from 'react-router-dom';
import './header.css';
import logo1 from '../Asserts/logo1.png';
import { Link } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    const [isDivVisibleForLogin, setDivVisibleForLogin] = useState(false);
    const [isDivVisibleForProfile, setDivVisibleForProfile] = useState(false);
    const [isStudent, setStudent] = useState(true);

    const loginFunction = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        setDivVisibleForLogin(false);
    };

    const showLogin = () => {
        setDivVisibleForLogin(true);
    };

    const closeLogin = () => {
        setDivVisibleForLogin(false);
    };

    const setTrueForStudent = () => {
        setStudent(false);
    };

    const setFalseForStudent = () => {
        setStudent(true);
    };

    const showTheProfile = () => {
        setDivVisibleForProfile(true);
        document.getElementById('ico3').className = 'bi bi-caret-up-fill';
    };

    const hideTheProfile = () => {
        document.getElementById('ico3').className = 'bi bi-caret-down-fill';
        setDivVisibleForProfile(false);
    };

    const logoutFunction = () => {
        signOut(auth);
        navigate('/');
    };

    return (
        <>
            <header>
                <nav>
                    <ul>
                       <div className='logo1'> <Link to={'/'}>
                            <img src={logo1} alt='' width={'80px'} /></Link>
                        </div>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><a href="#about">About</a></li>
                        <li>Contact</li>
                        <li><a href="#in">Internship</a></li>
                        <li> <Link to={'/resume'}>Resume</Link> </li>
                        {user ? (
                            <>
                                <div className='Profile'>
                                    <Link to={'/profile'}>
                                        <img
                                            src={user?.photo}
                                            alt=''
                                            onMouseEnter={showTheProfile}
                                            className='rounded-full w-12'
                                            id='picpro'
                                        />
                                       
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='auth'>
                                    <button className='btn1 pl-8 ml-2'>
                                        <Link to='/login'>Login</Link>
                                    </button>
                                    <button className='btn2 pl-8 ml-3'>
                                        <Link to='/signup'>Register</Link>
                                    </button>
                                </div>
                            </>
                        )}
                        {user ? (
                            <>
                                <button className='bt-log' id='bt' onClick={logoutFunction}>
                                    Logout <i className='bi bi-box-arrow-right'></i>
                                </button>
                            </>
                        ) : null}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
