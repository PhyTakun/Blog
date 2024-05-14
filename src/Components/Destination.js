import React, { useEffect, useState } from 'react';
import DestinationData from './DestinationData';
import alley from '../Assets/Alley.jpg';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { app } from '../Firebase';

const firestore = getFirestore(app);
const storage = getStorage(app);

export default function Destination() {
  const [blogs, setBlogs] = useState([]);
  const [name,setName] =useState([])
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const snapshots = await getDocs(collection(firestore, "UserData"));
        const blogData = snapshots.docs.map(doc => doc.data().Blog);
        setBlogs(blogData);

        const nameData = snapshots.docs.map(doc => doc.data().name);
        setName(nameData);

        const imageURLs = await Promise.all(snapshots.docs.map(async (doc) => {
          const imageURL = await getDownloadURL(ref(storage, doc.data().image));
          return imageURL;
        }));
        setImageUrls(imageURLs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="destination">
      <DestinationData
      heading= "Taal Volcano, balancas"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
       nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      img1 ={alley}
      class = "first-des"
      Name = "Jessica"
      />

        {blogs.map((blog, index) => (
        <DestinationData
          key={index}
          text={blog}
          class={index % 2 === 0 ? "first-des" : "first-des-rev"}
          img1={imageUrls[index]}
          Name = {name[index]}
        />
      ))}
      </div>

      
      )
      
      }
      
