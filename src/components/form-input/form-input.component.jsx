import './form-input.styles.scss'


const FormInput = ({ label, ...otherProps }) => {

    return (

        <div className='group'>

            <input className='form-input' {...otherProps} />

            <label className={`${otherProps.value} form-input-label `}>{label}</label>

        </div>

    )

}

export default FormInput