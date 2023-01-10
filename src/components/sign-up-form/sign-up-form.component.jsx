import './sign-up-form.styles.scss'


import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';


const SignUpForm = () => {

    return (
        <div>

            <h2></h2>
            <span></span>

            <form action="">

                <FormInput label="Display Name" required type="text" name="displayName" />

                <FormInput label="Email" required type="email" name="email" />

                <FormInput label="Password" required type="password" name="password" />

                <FormInput label="Confirm Password" required type="password" name="confirmPassword" />

                <Button buttonType='signUp' type="submit">Sign Up</Button>

            </form>

        </div>
    )

}

export default SignUpForm;