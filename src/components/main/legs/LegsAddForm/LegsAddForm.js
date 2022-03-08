import Button from '../../../../common/buttons/Button'
import s from './LegsAddForm.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { addLeg } from '../../../../store/redusers/legsReduser';
import { useState } from 'react';


const time_to_arr = (time) => {
    const arr = time.split(':')
    return arr
}
const date_to_arr = (date) => {
    const arr = date.split('-')
    return arr
}

// вычитание дат
const time_subtraction = (start_date, start_time, end_time) => {
    const start_time_arr = time_to_arr(start_time)
    const end_time_arr = time_to_arr(end_time)
    const start_date_arr = date_to_arr(start_date)
    const end_date_arr = (end_time_arr[0] - start_time_arr[0] >= 0) ? date_to_arr(start_date) : [start_date_arr[0], start_date_arr[1], `${+start_date_arr[2] + 1}`]
    const start_moment = new Date(start_date_arr[0], start_date_arr[1], start_date_arr[2], start_time_arr[0], start_time_arr[1])
    const end_moment = new Date(end_date_arr[0], end_date_arr[1], end_date_arr[2], end_time_arr[0], end_time_arr[1])

    const time_period_mm = (end_moment - start_moment) / 60000
    return time_period_mm
}

const leg_block_class = s.leg_block + ' ' + s.active;

const LegsAddForm = (props) => {

    const calculateFC = (fc) => {
        return `${+fc + 1}`
    }

    const calculateFH = (fh, start_date, start_time, end_time) => {

        const fh_to_min = (fh) => {
            const arr = fh.split(':')
            const mm = (+arr[0] * 60) + (+arr[1])
            return mm
        }

        const HH = Math.floor((fh_to_min(fh) + time_subtraction(start_date, start_time, end_time)) / 60)
        const MM = (fh_to_min(fh) + time_subtraction(start_date, start_time, end_time)) % 60

        const final_fh = `${HH}:${MM}`

        return final_fh
    }

    const calculateFlightBlockTime = (start_date, start_time, end_time) => {
        const time_period_mm = time_subtraction(start_date, start_time, end_time)
        const HH = Math.floor(time_period_mm / 60)
        const MM = time_period_mm % 60
        return `${HH}:${MM}`
    }
    return (
        <div className={s.addForm}>
            <div className={leg_block_class}>
                <div className={s.leg_block_item}>
                    <span>Dep. Date</span>
                </div>
                <div className={s.leg_block_item_text}>
                    <span>Flight No</span>
                </div>
                <div className={s.leg_block_item_text}>
                    <span>From</span>
                </div>
                <div className={s.leg_block_item_text}>
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
                <div className={s.leg_block_item_text}>
                    <span>Flight Time</span>
                </div>
                <div className={s.leg_block_item_text}>
                    <span>Block Time</span>
                </div>
                <div className={s.leg_block_item_text}>
                    <span>FH</span>
                </div>
                <div className={s.leg_block_item_text}>
                    <span>FC</span>
                </div>
            </div>
            <Formik
                initialValues={{
                    depDate: '2022-03-02',
                    flightNumber: 'txc2345',
                    from: 'EDDT',
                    to: 'EDDE',
                    blockOff: '22:44',
                    takeOff: '22:44',
                    landing: '22:44',
                    blockOn: '22:44',
                    flightTime: '00:00',
                    blockTime: '00:00',
                    fh: '00:00',
                    fc: '00',
                }}

                validate={(values) => {
                    const errors = {};
                    if (!values.depDate) {
                        errors.depDate = 'Required';
                    } else if (!values.flightNumber) {
                        errors.flightNumber = 'Required';
                    } else if (!values.from) {
                        errors.from = 'Required';
                    } else if (!values.to) {
                        errors.to = 'Required';
                    } else if (!values.blockOff) {
                        errors.blockOff = 'Required';
                    } else if (!values.blockOn) {
                        errors.blockOn = 'Required';
                    } else if (!values.landing) {
                        errors.landing = 'Required';
                    } else if (!values.flightTime) {
                        errors.flightTime = 'Required';
                    } else if (!values.blockTime) {
                        errors.blockTime = 'Required';
                    } else if (!values.fh) {
                        errors.fh = 'Required';
                    } else if (!values.fc) {
                        errors.fc = 'Required';
                    } return errors;
                    //} 
                    //</div>else if (
                    //  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.depDate)
                    // ){
                    // errors.depDate = 'Invalid data';

                }}

                // handleChange={(values) => {
                //     console.log(values, ' handleChange')
                // }}


                onSubmit={(initialValues, { setFieldValue }) => {

                    const values = {
                        depDate: initialValues.depDate,
                        flightNumber: initialValues.flightNumber,
                        from: initialValues.from,
                        to: initialValues.to,
                        blockOff: initialValues.blockOff,
                        takeOff: initialValues.takeOff,
                        landing: initialValues.landing,
                        blockOn: initialValues.blockOn,
                        flightTime: initialValues.flightTime,
                        blockTime: initialValues.blockTime,
                        fh: initialValues.fh,
                        fc: initialValues.fc,
                    }
                    props.addLeg(props.msn, values)
                    props.addLegForm() // close addForm
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
                    setFieldValue
                }) => (
                    <Form onSubmit={handleSubmit} >

                        <div className={s.leg_block}>
                            {console.log(touched.to)}
                            <div className={s.leg_block_item}>
                                <Field className={s.leg_block_date} type='date' id='depDate' name='depDate' placeholder='none' />
                                {errors.depDate ? <span>{errors.depDate}</span> : null}
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text} type='text' id='flightNumber' name='flightNumber' placeholder='none' />
                                {errors.flightNumber ? <span>{errors.flightNumber}</span> : null}
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text} type='text' id='from' name='from' placeholder='none' />
                                {errors.from ? <span>{errors.from}</span> : null}
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text} type='text' id='to' name='to' placeholder='none' />
                                {errors.to ? <span>{errors.to}</span> : null}
                            </div>
                            <div className={s.leg_block_item}>
                                <Field className={s.leg_block_time} onBlur={e => {
                                    setFieldValue('blockTime', calculateFlightBlockTime(values.depDate, values.blockOff, values.blockOn))
                                }} type='time' id='blockOff' name='blockOff' placeholder='none' />
                                {errors.blockTime ? <span>{errors.blockTime}</span> : null}
                                {errors.blockOff ? <span>{errors.blockOff}</span> : null}
                            </div>
                            <div className={s.leg_block_item}>
                                <Field className={s.leg_block_time} onBlur={e => {
                                    setFieldValue('fh', calculateFH(props.aircraftData.FH, values.depDate, values.takeOff, values.landing))
                                    setFieldValue('fc', calculateFC(props.aircraftData.FC))
                                    setFieldValue('flightTime', calculateFlightBlockTime(values.depDate, values.takeOff, values.landing))
                                }} type='time' id='takeOff' name='takeOff' placeholder='none' />
                                {errors.takeOff ? <span>{errors.takeOff}</span> : null}
                                {errors.flightTime ? <span>{errors.flightTime}</span> : null}
                                {errors.fh ? <span>{errors.fh}</span> : null}
                                {errors.fc ? <span>{errors.fc}</span> : null}
                            </div>
                            <div className={s.leg_block_item}>
                                <Field className={s.leg_block_time} onBlur={e => {
                                    setFieldValue('fh', calculateFH(props.aircraftData.FH, values.depDate, values.takeOff, values.landing))
                                    setFieldValue('fc', calculateFC(props.aircraftData.FC))
                                    setFieldValue('flightTime', calculateFlightBlockTime(values.depDate, values.takeOff, values.landing))
                                }} type='time' id='landing' name='landing' placeholder='none' />
                                {errors.landing ? <span>{errors.landing}</span> : null}
                                {errors.flightTime ? <span>{errors.flightTime}</span> : null}
                            </div>
                            <div className={s.leg_block_item}>
                                <Field className={s.leg_block_time} onBlur={e => {
                                    setFieldValue('blockTime', calculateFlightBlockTime(values.depDate, values.blockOff, values.blockOn))
                                }} type='time' id='blockOn' name='blockOn' placeholder='none' />
                                {errors.blockOn ? <span>{errors.blockOn}</span> : null}
                                {errors.blockTime ? <span>{errors.blockTime}</span> : null}
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text}
                                    //value={calculateFlightBlockTime(values.depDate, values.takeOff, values.landing)} 
                                    value={values.flightTime}
                                    type='text' id='flightTime' name='flightTime' placeholder='none' disabled />
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text} value={calculateFlightBlockTime(values.depDate, values.blockOff, values.blockOn)} type='text' id='blockTime' name='blockTime' placeholder='none' disabled />
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text} value={calculateFH(props.aircraftData.FH, values.depDate, values.takeOff, values.landing)} type='text' id='fh' name='fh' placeholder='none' disabled />
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text} value={calculateFC(props.aircraftData.FC)} type='text' id='fc' name='fc' placeholder='none' disabled />
                            </div>
                        </div>
                        <div className={s.addFormControlPanel}>
                            <Button type="submit" text='Add' />
                            <Button event={props.addLegForm} text='Cancel' />
                        </div>
                    </Form>
                )}
            </Formik>


        </div >
    )
}

export default LegsAddForm