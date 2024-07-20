import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import { base_url } from '../services/baseurl';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';

function Auth() {
    const firebaseConfig = {
        apiKey: "AIzaSyC3ZZKP8RE5o8Z7ITdzDAhhWUeRjzkYiKs",
        authDomain: "proserve-4222c.firebaseapp.com",
        projectId: "proserve-4222c",
        storageBucket: "proserve-4222c.appspot.com",
        messagingSenderId: "948803366208",
        appId: "1:948803366208:web:a66a68e43d3273a1459ea5",
        measurementId: "G-GD3FY3XCF1"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const navigate = useNavigate();

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            console.log('User authenticated with Google:', user);

            const { data } = await axios.post(`${base_url}/user/googleLogin`, {
                name: user.displayName,
                email: user.email,
            });

            const { token } = data;

            console.log('Token received from server:', token);

            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', JSON.stringify({
                name: user.displayName,
                email: user.email,
            }));

            console.log('User details and token saved to session storage');

           
              
        setTimeout(() => {
            navigate('/userhome');
        }, 1500);

        } catch (error) {
            console.error('Error during authentication or saving user', error);
        }
    };

    return (
        <div>
            <GoogleButton onClick={handleLogin} />
        </div>
    );
}

export default Auth;
