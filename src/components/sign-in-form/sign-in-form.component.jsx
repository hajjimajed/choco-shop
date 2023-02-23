import { useState } from "react";

import './sign-in-form.styles.scss'

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { async } from "@firebase/util";

const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;




    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }


    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const { user } = await signInAuthWithEmailAndPassword(email, password);


            resetFormFields();

        } catch (error) {

            switch (error.code) {
                case 'auth/wrong-password': alert("incorrect password");
                    break
                case 'auth/user-not-found': alert("incorrect email");
                    break
                default: console.log(error);
            }

        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }



    return (
        <div className="sign-in-container">
            <h1>Already have an account</h1>
            <h2>Sign in</h2>

            <form action="" onSubmit={handleSubmit}>


                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

                <div className="buttons-container">

                    <Button type='submit' buttonType='signIn' >Sign In</Button>
                    <Button buttonType='google' onClick={signInWithGoogle}  >Google</Button>

                </div>
            </form>
        </div>
    )

}

export default SignInForm;