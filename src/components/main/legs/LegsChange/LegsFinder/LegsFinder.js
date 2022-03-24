import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '../../../../../common/buttons/Button';
import s from './LegsFinder.module.css'

const LegsFinder = ({ legsRequest }) => {



    return (
        <div className={s.LegsFinderContainer}>
            <Formik
                initialValues={{ from: '2022-03-01', to: '2022-03-25' }}
                validate={values => {
                    const errors = {};
                    if (!values.from) {
                        errors.from = 'Required';
                    } else if (!values.to) {
                        errors.to = 'Required';
                    } return errors;
                }}

                onSubmit={(values, { setSubmitting }) => {
                    legsRequest(values.from, values.to)
                    setSubmitting(false)
                    console.log(values.from, values.to)
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
                        <Button text="Search" type="submit" isDisabled={isSubmitting} />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LegsFinder;