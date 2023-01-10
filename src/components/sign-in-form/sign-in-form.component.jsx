import { useState } from "react";

import './sign-in-form.styles.scss'

import Button from "../button/button.component";

import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignInForm = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <button onClick={logGoogleUser}>
            Sign in with Google
        </button>
    )

}

export default SignInForm;