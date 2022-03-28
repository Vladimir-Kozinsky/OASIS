import s from './SignUp.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '../../../common/buttons/Button';
import Input from '../../../common/inputs/Input';

const SingUp = (props) => {
    return (
        <div className={s.signUp}>
            <Formik
                initialValues={{}}
                validate={(values) => {
                    const errors = {};
                    if (!values.firstName) {
                        errors.firstName = 'Required';
                    }
                    if (!values.lastName) {
                        errors.lastName = 'Required';
                    }
                    if (!values.position) {
                        errors.position = 'Required';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    if (!values.confpassword) {
                        errors.confpassword = 'Required';
                    }
                    if (values.confpassword && values.password && values.confpassword !== values.password) {
                        errors.confpassword = 'Passwords do not match';
                    } return errors
                }}

                onSubmit={(values, actions) => {
                    console.log(values)
                    actions.setSubmitting(false)
                }}
            >
                {(
                    { errors,
                        handleSubmit,
                        isSubmitting
                    }) => (
                    <Form onSubmit={handleSubmit} className={s.form} >
                        <h2>Sign Up</h2>
                        <div className={s.fields_block}>
                            <div className={s.field_block}>
                                <div className={s.label_wrap}><label>First Name*</label></div>
                                <Input type='text' id='firstName' name='firstName' placeholder='Enter user first name' />
                                {errors.firstName ? <span>{errors.firstName}</span> : null}
                            </div>
                            <div className={s.field_block}>
                                <div className={s.label_wrap}><label>Last Name*</label></div>
                                <Input type='text' id='lastName' name='lastName' placeholder='Enter user last name' />
                                {errors.lastName ? <span>{errors.lastName}</span> : null}
                            </div>
                            <div className={s.field_block}>
                                <div className={s.label_wrap}><label>Position*</label></div>
                                <Input type='text' id='position' name='position' placeholder='Enter position' />
                                {errors.position ? <span>{errors.position}</span> : null}
                            </div>
                            <div className={s.field_block}>
                                <div className={s.label_wrap}><label>Password*</label></div>
                                <Input type='password' id='password' name='password' placeholder='Enter password' />
                                {errors.password ? <span>{errors.password}</span> : null}
                            </div>
                            <div className={s.field_block}>
                                <div className={s.label_wrap}><label>Confirm Password*</label></div>
                                <Input type='password' id='confpassword' name='confpassword' placeholder='Confirm password' />
                                {errors.confpassword ? <span>{errors.confpassword}</span> : null}
                            </div>
                        </div>

                        <div className={s.rem_block}>
                            <div className={s.rem_wrap}>
                                <Field type='checkbox' id='isRemember' name='isRemember' />
                                <label>Remember me</label>
                            </div>

                        </div>
                        <div className={s.addFormControlPanel}>
                            <Button isDisabled={isSubmitting} type="submit" text='Create user' />
                        </div>
                        <div className={s.link_block} >
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SingUp