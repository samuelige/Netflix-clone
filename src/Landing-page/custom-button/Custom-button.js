import React from 'react'

const CustomButton = ({children, className}) => {
    return (
        <div>
            <button className={className} >{children}</button>
        </div>
    )
};
export default CustomButton
