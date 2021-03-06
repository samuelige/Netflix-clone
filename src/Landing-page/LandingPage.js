import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import Email from './Email component/Email'
import Header from './Header/Header'
import './LandingPage.scss'
import tv from './images/tv.png'
import mobile from './images/mobile-0819.jpg'
import boxShot from './images/boxshot.png'
import devicePile from './images/device-pile.png'
import QuestionDropdown from './custom-add-component/CustomAdd';
import Footer from './footer/Footer';



function LandingPage() {
    const videoStyle = {
        position: 'absolute',
        marginLeft: '5.5%',
        
    }

    
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
            <div className="story-container">
                <div className="story-text">
                    <h1>Enjoy on your TV.</h1>
                    <span className="watch-on-tv">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</span>
                </div>
                <div className="story-animation">
                    <div className="animation-card">
                        <img src={tv} className="led-tv" alt="tv"/>
                    </div>
                    <div className="video-container">
                        <ReactPlayer url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" playing={true} loop={true} muted={true} style={videoStyle} width="29%" height='250px'/>
                    </div>  
                </div>
            </div>
            <div className="download-container">
                <div className="image-container">
                    <img src={mobile} className='mobile' alt="mobile"/>
                    <div className="download-card">
                        <img src={boxShot} className="box-shot" alt='boxShot'/>
                        <div className="download-text">
                            <span className='stranger-things'>Stranger Things</span>
                            <span className="downloading">Downloading...</span>
                        </div>
                    </div>
                </div>
                <div className="download-advert">
                    <h1>Download your shows to watch offline.</h1>
                    <span className="favorites">Save your favorites easily and always have something to watch.</span>
                </div>
            </div>
            <div className="thirdSecond">
                <div className="watchEverywhere">
                    <h1>Watch everywhere.</h1>
                    <span className="stream">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</span>
                </div>

                <div className="second-story-animation">
                    <div className="secondAnim-card">
                        <img src={devicePile} className='device-Pile' alt=" device Pile"/>
                    </div>
                    <div className="secondAnim-video-container">
                        <ReactPlayer url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" playing={true} loop={true} muted={true} style={videoStyle} width="26.5%" height='250px'/>
                    </div>  
                </div>
            </div>
            <div className="fourthSection">
                <h1 className="frequently">Frequently Asked Questions</h1>
                <div className="sub-section">
                    <QuestionDropdown /> 
                </div>
                <span className='secondReadyToWatch'>Ready to watch? Enter your email to create or restart your membership.</span>
                <div className="bottom-email">
                    <Email />
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default LandingPage
