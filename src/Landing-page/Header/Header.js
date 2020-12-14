import React from 'react'

import './Header.css'
import {ReactComponent as NetflixLogo} from '../images/netflixLogo.svg'
import SignIn from '../Navigations/Sign-in/Sign-in'

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <NetflixLogo  className='netflix-logo'/>
            </div>
            <SignIn />
        </div>
    )
}

export default Header
