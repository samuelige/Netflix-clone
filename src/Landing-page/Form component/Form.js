import React, {useState} from 'react'
import Input from '../Input component/Input';
import './Form.css'

const Form = () => {
    const [values, setValues] = useState({
        email: ''
    })

    const handleChange = (e) => {

        e.persist();
        setValues((values) => ({
            ...values,
            email: e.target.value,
        }));
    }

    return (
        <form className="input-form">
            <Input
                type='text'
                name='email'
                value= {values.email}
                handleChange={handleChange}
                label='Email address'
                required
            />
        </form>
    )
}

export default Form


        
                
                
           