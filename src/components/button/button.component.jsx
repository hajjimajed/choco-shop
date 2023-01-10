import './button.styles.scss'


const BUTTON_TYPE_CLASSES = {
    signIn: 'google-sign-in',
    signUp: 'google-sign-up',
    inverted: 'inverted'
}


const Button = ({ children, buttonType }) => {

    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
            {children}
        </button>
    )

}

export default Button;