import React from 'react'
import Form from '../Form component/Form'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CustomButton from '../custom-button/Custom-button';
import './Email.css'

const Email = () => {
    return (
        <div className='email-container'>
            <Form />
            <CustomButton className="get-started-container">
                <span className= 'get-started'>GET STARTED </span>
                <ChevronRightIcon />
            </CustomButton>
        </div>
    )
}

export default Email
