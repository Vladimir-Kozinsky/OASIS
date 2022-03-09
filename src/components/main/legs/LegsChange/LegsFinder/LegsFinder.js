import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '../../../../../common/buttons/Button';
import s from './LegsFinder.module.css'

const LegsFinder = (props) => {

    return (
        <div className={s.LegsFinderContainer}>
            <Formik
                initialValues={{ from: '2022-03-02', to: '2022-03-03' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Form className={s.legsFinder_form} onSubmit={handleSubmit}>
                        <Field className={s.legsFinder_field} id='from' name='from' type='date' />
                        <Field className={s.legsFinder_field} id='to' name='to' type='date' />
                        <Button event={props.setChangeMode} text="Search" type='submit' />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LegsFinder;