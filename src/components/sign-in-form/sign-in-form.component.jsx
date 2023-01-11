import { useState, useContext } from "react";

import './sign-in-form.styles.scss'

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { async } from "@firebase/util";

import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const { setCurrentUser } = useContext(UserContext);


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const { user } = await signInAuthWithEmailAndPassword(email, password);

            setCurrentUser(user);

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
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in</span>

            <form action="" onSubmit={handleSubmit}>


                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

                <div className="buttons-container">

                    <Button type='submit' buttonType='signUp' >Sign In</Button>
                    <Button buttonType='google' onClick={signInWithGoogle}  >Google</Button>

                </div>
            </form>
        </div>
    )

}

export default SignInForm;