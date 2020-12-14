import React, { useState } from 'react';

import CustomButton from '../../custom-button/Custom-button'
import './SignIn.css'

const CustomSignIn = () => {
    return (
        <div className='signIn-button-container'>
            <CustomButton className='sign-button'> Sign in</CustomButton>
        </div>
    )
}

const SignIn = () => {
    return (
        <CustomSignIn />
        
    )
}

export default SignIn

