import React, { useState } from 'react'
import {Link} from "react-router-dom"
import Navbar from '../Components/Navbar'
import './Signup.css'
import {app} from "../Firebase";
import {getFirestore,collection, addDoc} from "firebase/firestore"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

const auth = getAuth(app);
const firestore = getFirestore(app); 
export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [name, setName] = useState("")

  const userSignup = (e) => {

    createUserWithEmailAndPassword(auth,email, password).then((value) => alert(`Success! ` ));
    addDoc(collection(firestore,'Names'),
    {
      Name: name,
      Email:email,
    })

  }
  return (
    <div>    
        <Navbar/>

    <div className='form-container'> 
        <h1> Sign up </h1>
        <h4> Sign the contract and share the word</h4>
        <form>
            <label > Name </label>
            <input type="text"  onChange={(e) =>setName(e.target.value)} ></input>
            <label> E-mail </label>
            <input type="email"  onChange={(e) => setEmail(e.target.value)}></input>
            <label> Password </label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
            <input type='button' value='Submit' className='form-submit' onClick={userSignup}></input>
        </form>
        <p> 
        <Link to = "/Sign in" > Click here to Sign-in </Link>
        </p>
    </div>
    </div>

  )
}
