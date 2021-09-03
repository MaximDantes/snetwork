import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router";
import Button from "../common/Button/Button";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

let LoginForm = ({handleSubmit, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    type='text'
                    placeholder='Login'
                    name='login'
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type='text'
                    placeholder='Password'
                    name='password'
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type='checkbox'
                    name='rememberMe'
                    component='input'
                />
                remember me
            </div>
            {captchaUrl &&
                <div>
                    <img src={captchaUrl}/>
                    <Field
                        type='text'
                        placeholder='Captcha'
                        name='captcha'
                        component={Input}
                        validate={[required]}
                    />
                </div>
            }
            <div>
                <Button text='Login'></Button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);



let Login = (props) => {
    const onSubmitHandler = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return <LoginForm onSubmit={onSubmitHandler} captchaUrl={props.captchaUrl}/>;
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

Login = connect(mapStateToProps, {login})(Login);

export default Login;