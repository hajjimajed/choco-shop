import './authentification.styles.scss'

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Footer from '../../components/footer/footer.component';

const Authentification = () => {

    return (

        <>
            <div className='checkout-page-header'>
                <div className='section-one'></div>
                <div className='section-two'>
                    <img src="https://i.ibb.co/QmCH5t0/melted-brown.png" alt="" />
                </div>
            </div>

            <div className='authetication-container'>

                <SignInForm />

                <SignUpForm />

            </div>

            <Footer />

        </>
    )

}

export default Authentification;