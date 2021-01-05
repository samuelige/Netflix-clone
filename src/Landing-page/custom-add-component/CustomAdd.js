import React, {useState, useEffect} from 'react'
import {ReactComponent as Addbutton} from '../images/addbutton.svg'
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import './CustomAdd.scss'

const CustomAdd = ({otherprops}) => {
    const [addState, setAddState] = useState('');

    const handleOpen = () => {
        setAddState(true)
    }

    const handleClose = () => {
        setAddState('')
    }

    
    return (
        <div className="questions">
            <div className="what-is">
                <h3>{otherprops.question}</h3>
                <div className="openAndCloseIcons">
                    {!addState ? <AddIcon className='add-icons' onClick={handleOpen} /> : <CloseIcon className='close'  onClick={handleClose}/>}
                </div>
                
            </div>
            
            

            {
                addState ? 
                (
                    <div className='answers'>
                        <span className='firstParagraph'> {otherprops.firstParagraph} </span>
                        <span className='secondParagraph'>{otherprops.secondParagraph}</span>
                    </div>
                )
                :
                null
                
            }
        </div>
    )
}


const QuestionDropdown = () => {
    const [textState, setTextState] = useState([
        {
            question: "What is Netflix?",
            firstParagraph: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            secondParagraph: "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        },
        {
            question:"How much does netflix cost?",
            firstParagraph: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,900 to ₦4,400 a month. No extra costs, no contracts.",
            
        },
        {
            question:"Where can I watch?",
            firstParagraph: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
            secondParagraph: "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
        },
        {
            question:"How do I cancel?",
            firstParagraph: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        },
        {
            question:"What can watch on netflix?",
            firstParagraph: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        }
    ])
    return (
        <div className="dropdown">
            {
                textState && 
                textState.map(({...otherprops}) => {
                    return (
                        <CustomAdd otherprops={otherprops}/>
                    )
                })
            }
            
        </div>
    )
}

export default QuestionDropdown
