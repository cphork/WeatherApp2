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
                <h2>Weather Forecast</h2>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/ebc4db2235034.560a96356930d.gif' />
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