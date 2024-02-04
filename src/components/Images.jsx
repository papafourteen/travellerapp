import React from 'react'
import {loremImages} from '../utils.js'
import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';



export const Images = () => {
    const [images,setImages]=useState(loremImages(50))
    const navigate=useNavigate()
    //console.log(images);
  return (
    <>
   
        <div className='img-container'>
        {images.map(photo=>(
            <div key={photo}>      
            <LazyLoadImage
            src={photo} 
            alt='lorem picsum' 
            effect='blur'
            width={300}
            height={300}
            placeholderSrc='vite.svg'
            />
            </div>
        ))} 
        </div>
        <button className="btn btn-primary" onClick={()=>navigate('/')}>go to Home page</button>
    </>
  )
}

