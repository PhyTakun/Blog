import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import './Signup.css'
import {app} from "../Firebase";
import {getAuth, signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"

const auth = getAuth(app);

export default function Signin() {
    const navigate = useNavigate()
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/blog')
                console.log(user.email)
            }
        }
        )
    },[auth,navigate])

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("")

    const SigninUser = async (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password).then(val => 
            console.log("Sign in successful"))
            .catch((err) => console.log(err)); 
    }
  return (
    <div>    
        <Navbar/>

    <div className='form-container'> 
        <h1> Sign in </h1>
        <form>
            <label> E-mail </label>
            <input type="email" placeholder='' onChange={(e) => setEmail(e.target.value)}></input>
            <label> Password </label>
            <input type="password" placeholder='' onChange={(e) => setPassword(e.target.value)}></input>
            <button  type= 'submit' onClick={SigninUser}> Sign in </button>
            
        </form>
    </div>
    </div>

  )
}
