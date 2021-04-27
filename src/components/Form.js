import React from "react"
import {useState} from 'react'


const Form = (props) => {

    const[formData, setFormData] =useState({
        searchterm: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event)  => {
            event.preventDefault()
            props.weathersearch(formData.searchterm)
    }


    return (
    <div>
        <h2>Today's Weather in Your Area</h2>
        <img src='https://res.cloudinary.com/dejg3dz16/image/upload/v1619505455/Single-Weather-Icons-drawing_ovnbgf.jpg'  alt='icon'/>

        <form  onSubmit = {handleSubmit}>
            <input placeholder= 'Enter Zip Code' type ='text'  value={formData.searchterm} name= 'searchterm' onChange={handleChange} />
            <input type ='submit' value='submit' />
        </form>
        
    </div>

    )
}



export default Form