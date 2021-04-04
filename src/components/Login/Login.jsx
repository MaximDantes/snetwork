import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router";
import Button from "../common/Button/Button";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type='text' placeholder='login' name='login' component='input'/>
            </div>
            <div>
                <Field type='text' placeholder='password' name='password' component='input'/>
            </div>
            <div>
                <Field type='checkbox' name='rememberMe' component='input'/>
            </div>
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
        props.login(formData.login, formData.password, formData.rememberMe);
    }

    if (props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return <LoginForm onSubmit={onSubmitHandler} />;
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

Login = connect(mapStateToProps, {login})(Login);

export default Login;