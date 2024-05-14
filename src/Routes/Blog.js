import {getAuth,onAuthStateChanged} from "firebase/auth"
import {getFirestore,collection,addDoc,getDocs, query,
where , } from 'firebase/firestore'
import {app} from "../Firebase"
import {getStorage,ref,uploadBytes} from 'firebase/storage'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import './Blog.css'

const firestore = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app)

export default function Blog() {

  const [data,setData] = useState("")
  const [pic,setPic] = useState("")

  const makeCollection = async () => {
    
    onAuthStateChanged(auth, async (user)=> {
      if(user)
      {
        const collectionRef = collection(firestore,"Names")
        const q = query(collectionRef, where ("Email" ,'==',user.email))
        const snapshot = await getDocs(q)
        const names =  snapshot.docs.map((da) => da.data().Name)
        const ImageRef = ref(storage,`images/${Date.now()}-${pic.name}`);
        const ImagePath = await uploadBytes(ImageRef,pic);
        await addDoc(collection(firestore,'UserData'), {
          name: names,
          Blog: data,
          image: ImagePath.ref.fullPath
        })

        alert("Submitted Succesfully! ")
      }
      else {
          alert("Sign in First! ")
      }
    })

   } 
  return (

    <div>
      <Navbar/>
      <div className='pushh'>
      <textarea className='cool-text-area' placeholder='Write Your Blog here..' onChange={(e) => setData(e.target.value)}>
      </textarea> <br/>
      <label for= "upload" className='upload-btn' > Upload Photos </label>
        <input id='upload' className='file-input' type='file' onChange={(e) => setPic(e.target.files[0])}/> 
       <button type = 'submit' className='upload-btn' onClick={makeCollection}> Submit </button>
       </div>
       </div>
  )
}
