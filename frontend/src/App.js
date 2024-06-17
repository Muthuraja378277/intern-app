import './App.css';
import Header from './components/Header';
import Profile from './components/profile/Profile';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./Feature/Userslice";
import { useEffect } from 'react';
import { auth } from './components/firebase/firebase';
import Main from './components/Main';
import { ResumeProvider } from './components/Context'; 
import WebFont from 'webfontloader';
import SubscriptionForm from './components/SubscriptionForm';
import Login from './components/Login';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          name: authUser.displayName,
          email: authUser.email,
          phoneNumber: authUser.phoneNumber
        }));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);
  const stripePromise = loadStripe('pk_test_51PRs64SJyoSEKWZjlsOK3VH29JvJN5Oz9Ux0s6S2yWQF30FrO8trfjBWpOW8zHHc8c6BwFDeKV3dtaZbrA1s6lx200pdAebIjK');

  return (
    <ResumeProvider>
    <Router>
      <>
      <Header />
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Register />} />
          <Route path="login" element={<Login/>} />
          <Route path='/profile' element={<Profile />} />
      
          <Route path='/subscribe' element={<SubscriptionForm/>} /> 
   
          
      
        <Route path='/resume' element={ <Main />}/>
      
        </Routes>
        </Elements>

        <Footer />
      </>
    </Router>
    </ResumeProvider>
  );
}

export default App;
