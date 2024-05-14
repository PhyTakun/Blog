import { initializeApp } from "firebase/app"; //initializing firebase 

const firebaseConfig = {   //config details 
  apiKey: "AIzaSyD51q8qx8z10IT5eAayhPBN9jEJEqPJ_bg",
  authDomain: "travel-blog-43616.firebaseapp.com",
  projectId: "travel-blog-43616",
  storageBucket: "travel-blog-43616.appspot.com",
  messagingSenderId: "590741861980",
  appId: "1:590741861980:web:5fde0217d65a26c04cd899",
  databaseURL: "https://travel-blog-43616-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig); //firebase app is connected to firebase account