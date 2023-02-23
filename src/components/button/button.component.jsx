import './button.styles.scss'


const BUTTON_TYPE_CLASSES = {
    signIn: 'google-sign-in',
    signUp: 'google-sign-up',
    inverted: 'inverted',
    google: 'google',
    add: 'add',
    add2: 'add2',
    product: 'product',
    cart: 'cart'
}


const Button = ({ children, buttonType, ...otherProps }) => {

    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )

}

export default Button;