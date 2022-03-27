import s from './Auth.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '../../common/buttons/Button';
import { Link } from "react-router-dom";
import Input from '../../common/inputs/Input';

const Auth = ({ isAuth, logIn }) => {
    return (
        <div className={s.auth}>
            <Formik
                initialValues={{
                    name: 'user',
                    password: 'user',
                    isRemember: false
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                }}

                onSubmit={(values, actions) => {
                    logIn(values.name, values.password, values.isRemember)
                    actions.setSubmitting(false)
                }}
            >
                {(
                    { errors,
                        handleSubmit,
                        isSubmitting
                    }) => (
                    <Form onSubmit={handleSubmit} className={s.form} >
                        <h2>Login</h2>
                        <div className={s.fields_block}>
                            <div className={s.field_block}>
                                <div className={s.label_wrap}><label>Name*</label></div>
                                <Input type='text' id='name' name='name' placeholder='Enter user name' />
                            </div>
                            <div className={s.field_block}>
                                <div className={s.label_wrap}><label>Password*</label></div>
                                <Input type='password' id='password' name='password' placeholder='Enter password' />
                            </div>
                        </div>

                        <div className={s.rem_block}>
                            <div className={s.rem_wrap}>
                                <Field type='checkbox' id='isRemember' name='isRemember' />
                                <label>Remember me</label>
                            </div>
                            <Link to='/register' >Forget password</Link>
                        </div>
                        <div className={s.addFormControlPanel}>
                            <Button isDisabled={isSubmitting} type="submit" text='Login' />
                        </div>
                        <div className={s.link_block} >
                            <span>Not registered yet? <Link to='/register' >Create an user</Link></span>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Auth