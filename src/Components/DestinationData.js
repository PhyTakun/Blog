import React from 'react';
import './ExploreStyle.css';
export default function DestinationData(props) {
  return (
    <div className={props.class}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>
           {props.text}</p>
           <h4> Posted by - {props.Name} </h4>
        </div>

        <div className="image">
          <img alt="an image" src={props.img1} />
          {/* <img alt="an image" src={props.img2} /> */}
        </div>

      </div>

  )
}
