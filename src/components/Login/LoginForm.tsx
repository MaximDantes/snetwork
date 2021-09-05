import React from 'react'
import {Formik} from 'formik'
import {TLoginFormData} from './Login'
import Button from '../common/Button/Button'
import FormikInput from '../common/Formik/FormikInput'
import FormikCheckBox from '../common/Formik/FormikCheckBox'

type TProps = {
    onSubmitHandler(formData: TLoginFormData): void
    captchaUrl: string | null
}

let LoginForm: React.FC<TProps> = (props) => {
    return (
        <Formik onSubmit={props.onSubmitHandler}
                initialValues={{login: '', password: '', rememberMe: false, captcha: ''}}
        >
            {(formikValues) =>
                <form onSubmit={formikValues.handleSubmit}>
                    <div>
                        <FormikInput name={'login'}
                                     placeholder={'Login'}
                                     onChange={formikValues.handleChange}
                                     onBlur={formikValues.handleBlur}
                                     value={formikValues.values.login}
                        />
                    </div>
                    <div>
                        <FormikInput name={'password'}
                                     type={'password'}
                                     placeholder={'Password'}
                                     onChange={formikValues.handleChange}
                                     onBlur={formikValues.handleBlur}
                                     value={formikValues.values.password}
                        />
                    </div>
                    <div>
                        <FormikCheckBox name={'rememberMe'}
                                        placeholder={'Remember me?'}
                                        onChange={formikValues.handleChange}
                                        onBlur={formikValues.handleBlur}
                                        checked={formikValues.values.rememberMe}
                        />
                    </div>
                    {
                        props.captchaUrl &&
                        <div>
                            <FormikInput name={'captcha'}
                                         onChange={formikValues.handleChange}
                                         onBlur={formikValues.handleBlur}
                                         value={formikValues.values.captcha}
                            />
                        </div>
                    }
                    <div>
                        <Button type={'submit'}
                                disabled={formikValues.isSubmitting}
                                text={'Login'}
                        />
                    </div>
                </form>
            }
        </Formik>
    )
}

export default LoginForm