import Button from '../../../../common/buttons/Button'
import s from './LegsAddForm.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { addLeg } from '../../../../store/redusers/legsReduser';


const leg_block_class = s.leg_block + ' ' + s.active;

const LegsAddForm = (props) => {
    return (
        <div className={s.addForm}>
            <div className={leg_block_class}>
                <div className={s.leg_block_item}>
                    <span>Dep. Date</span>
                </div>
                <div className={s.leg_block_item}>
                    <span>Flight No</span>
                </div>
                <div className={s.leg_block_item}>
                    <span>From</span>
                </div>
                <div className={s.leg_block_item}>
                    <span>To</span>
                </div>
                <div className={s.leg_block_item}>
                    <span>Block OFF</span>
                </div>
                <div className={s.leg_block_item}>
                    <span>Take OFF</span>
                </div>
                <div className={s.leg_block_item}>
                    <span>Landing</span>
                </div>
                <div className={s.leg_block_item}>
                    <span>Block ON</span>
                </div>
            </div>
            <Formik
                initialValues={{
                    depDate: '22.05.2022',
                    flightNumber: 'txc2345',
                    from: 'EDDT',
                    to: 'EDDE',
                    blockOff: '22:44',
                    takeOff: '22:44',
                    landing: '22:44',
                    blockOn: '22:44',
                }}

                validate={values => {
                    const errors = {};
                    if (!values.depDate) {
                        errors.depDate = 'Required';
                        //} 
                        //</div>else if (
                        //  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.depDate)
                        // ){
                        // errors.depDate = 'Invalid data';
                    } return errors;
                }}

                onSubmit={(values) => {
                    props.addLeg(props.msn, values)
                    props.addLegForm()
                }}
            >
                <Form >
                    <div className={s.leg_block}>
                        <div className={s.leg_block_item}>
                            <Field className={s.leg_block_date} type='date' id='depDate' name='depDate' placeholder='none' />
                            {/* <ErrorMessage name="depDate" component="div" /> */}
                        </div>
                        <div className={s.leg_block_item}>
                            <Field className={s.leg_block_text} type='text' id='flightNumber' name='flightNumber' placeholder='none' />
                        </div>
                        <div className={s.leg_block_item}>
                            <Field className={s.leg_block_text} type='text' id='from' name='from' placeholder='none' />
                        </div>
                        <div className={s.leg_block_item}>
                            <Field className={s.leg_block_text} type='text' id='to' name='to' placeholder='none' />
                        </div>
                        <div className={s.leg_block_item}>
                            <Field className={s.leg_block_time} type='time' id='blockOff' name='blockOff' placeholder='none' />
                        </div>
                        <div className={s.leg_block_item}>
                            <Field className={s.leg_block_time} type='time' id='takeOff' name='takeOff' placeholder='none' />
                        </div>
                        <div className={s.leg_block_item}>
                            <Field className={s.leg_block_time} type='time' id='landing' name='landing' placeholder='none' />
                        </div>
                        <div className={s.leg_block_item}>
                            <Field className={s.leg_block_time} type='time' id='blockOn' name='blockOn' placeholder='none' />
                        </div>
                    </div>
                    <div className={s.addFormControlPanel}>
                        <Button type="submit" text='Add' />
                        <Button event={props.addLegForm} text='Cancel' />
                    </div>
                </Form>
            </Formik>


        </div>
    )
}

export default LegsAddForm