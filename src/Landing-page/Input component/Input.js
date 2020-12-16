import React from 'react'
import './Input.scss'


// Floating label
const Input = ({label, ...otherProps}) => {

    return (
        <div className='group'> 
            <input className='form-input'  onChange= {otherProps.handleChange} {...otherProps} />
            {
                label && 
            (<label className={`${otherProps.value ? 'active' : '' } form-input-label`}>{label}</label>)
            }
        </div>
    )
}

export default Input
