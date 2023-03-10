import './sign-up-form.styles.scss'

import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;




    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password confirmation not match')
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);


            await createUserDocumentFromAuth(user, { displayName });

            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email is already exist')
            }
            else {
                console.log("user creation encountered an error", error);
            }
        }



    }


    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>

            <h1>new member</h1>
            <h2>register</h2>

            <form action="" onSubmit={handleSubmit}>

                <FormInput onChange={handleChange} label="Display Name" required type="text" name="displayName" value={displayName} />

                <FormInput onChange={handleChange} label="Email" required type="email" name="email" value={email} />

                <FormInput onChange={handleChange} label="Password" required type="password" name="password" value={password} />

                <FormInput onChange={handleChange} label="Confirm Password" required type="password" name="confirmPassword" value={confirmPassword} />

                <Button buttonType='signUp' type="submit">Sign Up</Button>

            </form>

        </div>
    )

}

export default SignUpForm;