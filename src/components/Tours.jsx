import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getData } from '../getData'
import './Tours.css'
import Card from './Card'

const url='https://raw.githubusercontent.com/mkatay/json-tours/main/tours'

export const Tours = () => {
  const [tours,setTours]=useState([])
  useEffect(()=>{
    getData(url,setTours)
  },[])
  console.log(tours);
  return (
    <div className='container'>
      <h3 >Our actual Tours</h3>
      <div className="card-holder">
          {tours.map(obj=><Card  key={obj.id} {...obj}/>)}
      </div>
    
      </div>
  )
}
