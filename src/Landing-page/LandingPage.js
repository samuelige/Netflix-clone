import React from 'react'
import Email from './Email component/Email'
import Header from './Header/Header'
import './LandingPage.scss'

function LandingPage() {
    return (
        <div className="mainContainer">
            <div className='header-container'>
                <Header /> 
                <div className="headerContent">
                    <h1 className='unlimited'>Unlimited movies, TV</h1>
                    <span className='shows'>shows, and more.</span>
                    <span className='watch'>Watch anywhere. Cancel anytime.</span>
                    <span className='readyToWatch'>Ready to watch? Enter your email to create or restart your membership.</span>
                </div>
                <div className="head-email">
                    <Email />
                </div>
            </div>
        </div>
    )
}

export default LandingPage
