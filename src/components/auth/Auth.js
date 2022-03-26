import s from './Auth.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '../../common/buttons/Button';
import { Link } from "react-router-dom";

const Auth = (props) => {
    return (
        <div className={s.auth}>
            <Formik
                initialValues={{}}
                validate={(values) => {
                    const errors = {};
                    if (!values.depDate) {
                        //   errors.depDate = 'Required';
                    }
                }}

                onSubmit={(values, actions) => {
                    actions.setSubmitting(false)
                }}
            >
                {(
                    { errors,
                        handleSubmit,
                        isSubmitting
                    }) => (
                    <Form onSubmit={handleSubmit} className={s.form} >
                        <div className={s.field_block}>
                            <label>Name</label>
                            <Field type='text' id='name' name='name' palaceholder='Enter user name' />
                        </div>
                        <div className={s.field_block}>
                            <label>Password</label>
                            <Field type='text' id='name' name='name' palaceholder='Enter user name' />
                        </div>

                        <div className={s.addFormControlPanel}>
                            <Button isDisabled={isSubmitting} type="submit" text='Login' />
                            <Button text='Cancel' />
                        </div>
                        <Link to='/register' >Register</Link>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Auth