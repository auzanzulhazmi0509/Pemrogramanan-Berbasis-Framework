import React, { useState, useContext } from 'react';
import { AuthContext } from './App';
import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup
} from 'firebase/auth';
import { firebaseInit } from '.';


const Join = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const auth = getAuth(firebaseInit)
    const googleProvider = new GoogleAuthProvider()

    const Auth = useContext(AuthContext)
    const handleForm = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                if (res.user) Auth.setLoggedIn(true)
            })
            .catch(e => {
                setError(e.message)
            })
    }

    const handleSignInWithPopUp = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                if (res.user) Auth.setLoggedIn(true)
            }).catch(e => {
                setError(e.message)
            })
    }
        

    return (
        <div>
            <h1>Join</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="password"
                />
                <hr />
                <button className="googleBtn" type="button">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="logo" />
                    Join With Google
                </button>
                <button type="submit">Join</button>
                <hr />
                <span>{error}</span>
            </form>
        </div>
    );

};

export default Join;