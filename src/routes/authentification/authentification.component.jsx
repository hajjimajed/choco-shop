import './authentification.styles.scss'

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const Authentification = () => {

    return (
        <div className='authetication-container'>

            <SignInForm />

            <SignUpForm />

        </div>
    )

}

export default Authentification;