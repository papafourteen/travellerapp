import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTour } from "../utility";
import './Tour.css'
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Tour = () => {
  const [tour, setTour] = useState([]);
  const param = useParams();
  const navigate=useNavigate()
  useEffect(() => {
    getTour(param.id, setTour);
  }, []);
  
  return (
   
    <div  className="tour-container">
      {tour[0] && (
         <div className="tour-holder">
         <h3 className="details-h3" >{tour[0].name}</h3>
        {/* <img src={tour[0].image} alt={tour[0].name} className="tour-image" />*/}
        <LazyLoadImage
            src={tour[0].image} 
            alt={tour[0].name} 
            effect='blur'
          
           
            placeholderSrc='vite.svg'
            className="tour-image"
            />
         <p className="tour-description">{tour[0].info}</p>
         <div className="buttons">
            <p className="tour-price">Price: ${tour[0].price}</p>
            <p className="tour-price bg-gradient" onClick={()=>navigate('/toursapp/tours')}>go back to all tours</p>
         
         </div>
         
       </div>
      )}
    </div>
  );
};
