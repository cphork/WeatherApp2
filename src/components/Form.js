import React, { useState } from 'react'

const Form = (props) => {
    const [formData, setFormData] = useState({
        searchterm: ""
    })



    const handleChange = (event) => {

        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.zipsearch(formData.searchterm.trim())
    }

    return (

        <>
            <div className='box-around'>
                <h2>Today's Weather In Your Area</h2>
                <img src='https://www.pngkey.com/png/detail/121-1215478_free-png-clouds-sun-and-rain-drops-weather.png' />
                <div>
                    <form className='form' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={formData.searchterm}
                            name="searchterm"
                            onChange={handleChange}
                            placeholder="Enter your zip code"
                        />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form