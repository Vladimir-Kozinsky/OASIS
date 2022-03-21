
import s from './ChangeLegForm.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';


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

const ChangeLegForm = ({ leg, aircraft, delLeg, getAircraftData }) => {

    const prevLegFH = () => {   //вычесть FH до этого лега
        const fh_to_min = (fh) => {
            const arr = fh.split(':')
            const mm = (+arr[0] * 60) + (+arr[1])
            return mm
        }
        const HH = Math.floor((fh_to_min(leg.fh) - fh_to_min(leg.flightTime)) / 60)
        const MM = (fh_to_min(leg.fh) - fh_to_min(leg.flightTime)) % 60

        const final_fh = `${HH}:${MM}`

        return final_fh
    }

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
        console.log(start_date, start_time, end_time)
        const time_period_mm = time_subtraction(start_date, start_time, end_time)
        const HH = Math.floor(time_period_mm / 60)
        const MM = time_period_mm % 60
        return `${HH}:${MM}`
    }

    const deleteLeg = () => {
        delLeg(aircraft, leg.id)
        getAircraftData(aircraft)
    }


    return (
        <div className={s.addForm}>
            <div className={leg_block_class}>
                <div className={s.leg_block_item}>
                    <span className={s.leg_block_item_span} >Dep. Date</span>
                </div>
                <div className={s.leg_block_item_text}>
                    <span className={s.leg_block_item_span} >Flight No</span>
                </div>
                <div className={s.leg_block_item_text}>
                    <span className={s.leg_block_item_span} >From</span>
                </div>
                <div className={s.leg_block_item_text}>
                    <span className={s.leg_block_item_span} >To</span>
                </div>
                <div className={s.leg_block_item_time}>
                    <span className={s.leg_block_item_span} >Block OFF</span>
                </div>
                <div className={s.leg_block_item_time}>
                    <span className={s.leg_block_item_span} >Take OFF</span>
                </div>
                <div className={s.leg_block_item_time}>
                    <span className={s.leg_block_item_span} >Landing</span>
                </div>
                <div className={s.leg_block_item_time}>
                    <span className={s.leg_block_item_span} >Block ON</span>
                </div>
                <div className={s.leg_block_item_text}>
                    <span className={s.leg_block_item_span} >Flight Time</span>
                </div>
                <div className={s.leg_block_item_text}>
                    <span className={s.leg_block_item_span} >Block Time</span>
                </div>
                <div className={s.leg_block_item_text}>
                    <span className={s.leg_block_item_span} >FH</span>
                </div>
                <div className={s.leg_block_item_text}>
                    <span className={s.leg_block_item_span} >FC</span>
                </div>
                <div className={s.iconBtn}>
                </div>
                <div className={s.iconBtn}>
                </div>
            </div>
            <Formik
                initialValues={{
                    depDate: leg.depDate,
                    flightNumber: leg.flightNumber,
                    from: leg.from,
                    to: leg.to,
                    blockOff: leg.blockOff,
                    takeOff: leg.takeOff,
                    landing: leg.landing,
                    blockOn: leg.blockOn,
                    flightTime: leg.flightTime,
                    blockTime: leg.blockTime,
                    fh: leg.fh,
                    fc: leg.fc,
                }}

                validate={(values) => {
                    const errors = {};
                    if (!values.depDate) {
                        errors.depDate = 'Required';
                    } else if (!values.flightNumber) {
                        errors.flightNumber = 'Requir0ed';
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
                    } else if (!values.flightTime || values.flightTime === '0') {
                        errors.flightTime = 'Required';
                    } else if (!values.blockTime || values.blockTime === '0') {
                        errors.blockTime = 'Required';
                    } else if (!values.fh || values.fh === '0') {
                        errors.fh = 'Required';
                    } else if (!values.fc || values.fc === '0') {
                        errors.fc = 'Required';
                    } return errors;
                    //} 
                    //</div>else if (
                    //  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.depDate)
                    // ){
                    // errors.depDate = 'Invalid data';

                }}

                onSubmit={(initialValues, actions) => {
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

                    // props.addLeg(props.msn, values)
                    // props.addLegForm() // close addForm
                    console.log(initialValues)
                    actions.setSubmitting(false)
                }}
            >
                {(
                    { errors,
                        values,
                        setFieldValue,
                        handleSubmit,
                        isSubmitting
                    }) => (
                    <Form onSubmit={handleSubmit} >
                        <div className={s.leg_block}>
                            <div className={s.leg_block_item}>
                                <Field className={s.leg_block_date}
                                    type='date' id='depDate' name='depDate' placeholder='none' />
                                {errors.depDate ? <span className={s.errorField}>{errors.depDate}</span> : null}
                            </div>

                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text}
                                    type='text' id='flightNumber' name='flightNumber' placeholder='none' />
                                {errors.flightNumber ? <span className={s.errorField} >{errors.flightNumber}</span> : null}
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text}
                                    type='text' id='from' name='from' placeholder='none' />
                                {errors.from ? <span className={s.errorField} >{errors.from}</span> : null}
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text} type='text' id='to' name='to' placeholder='none' />
                                {errors.to ? <span className={s.errorField} >{errors.to}</span> : null}
                            </div>
                            <div className={s.leg_block_item_time}>
                                <Field className={s.leg_block_time}
                                    onChange={(e) => {
                                        setFieldValue('blockOff', e.target.value)
                                        setFieldValue('blockTime', calculateFlightBlockTime(values.depDate, e.target.value, values.blockOn))
                                    }}
                                    type='time' id='blockOff' name='blockOff' placeholder='none' />
                                {errors.blockTime ? <span className={s.errorField} >{errors.blockTime}</span> : null}
                                {errors.blockOff ? <span className={s.errorField} >{errors.blockOff}</span> : null}
                            </div>
                            <div className={s.leg_block_item_time}>
                                <Field className={s.leg_block_time} onChange={e => {
                                    setFieldValue('takeOff', e.target.value)
                                    setFieldValue('fh', calculateFH(prevLegFH(), values.depDate, e.target.value, values.landing))
                                    setFieldValue('fc', calculateFC(leg.fc - 1))
                                    setFieldValue('flightTime', calculateFlightBlockTime(values.depDate, e.target.value, values.landing))
                                }} type='time' id='takeOff' name='takeOff' placeholder='none' />
                                {errors.takeOff ? <span className={s.errorField} >{errors.takeOff}</span> : null}
                                {errors.flightTime ? <span className={s.errorField} >{errors.flightTime}</span> : null}
                                {errors.fh ? <span className={s.errorField} >{errors.fh}</span> : null}
                                {errors.fc ? <span className={s.errorField} >{errors.fc}</span> : null}
                            </div>
                            <div className={s.leg_block_item_time}>
                                <Field className={s.leg_block_time}
                                    onChange={e => {
                                        setFieldValue('landing', e.target.value)
                                        setFieldValue('fh', calculateFH(prevLegFH(), values.depDate, values.takeOff, e.target.value))
                                        setFieldValue('fc', calculateFC(leg.fc - 1))
                                        setFieldValue('flightTime', calculateFlightBlockTime(values.depDate, values.takeOff, e.target.value))
                                    }}
                                    type='time' id='landing' name='landing' placeholder='none' />
                                {errors.landing ? <span className={s.errorField} >{errors.landing}</span> : null}
                                {errors.flightTime ? <span className={s.errorField} >{errors.flightTime}</span> : null}
                            </div>
                            <div className={s.leg_block_item_time}>
                                <Field className={s.leg_block_time}
                                    onChange={e => {
                                        setFieldValue('blockOn', e.target.value)
                                        setFieldValue('blockTime', calculateFlightBlockTime(values.depDate, values.blockOff, e.target.value))
                                    }}
                                    type='time' id='blockOn' name='blockOn' placeholder='none' />
                                {errors.blockOn ? <span className={s.errorField} >{errors.blockOn}</span> : null}
                                {errors.blockTime ? <span className={s.errorField} >{errors.blockTime}</span> : null}
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text}
                                    type='text' id='flightTime' name='flightTime' placeholder='none' disabled />
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text}
                                    type='text' id='blockTime' name='blockTime' placeholder='none' disabled />
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text}
                                    type='text' id='fh' name='fh' placeholder='none' disabled />
                            </div>
                            <div className={s.leg_block_item_text}>
                                <Field className={s.leg_block_text}
                                    type='text' id='fc' name='fc' placeholder='none' disabled />
                            </div>
                            <div className={s.iconBtn}>
                                <button className={s.delBtn} onClick={deleteLeg} ></button>
                            </div>
                            <div className={s.iconBtn}>
                                <button className={s.saveBtn} type="submit"></button>
                            </div>
                        </div>
                        {/* <div className={s.addFormControlPanel}>
                            <Button isDisabled={isSubmitting} type="submit" text='Add' />
                            <Button event={props.addLegForm} text='Cancel' />
                        </div> */}
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default ChangeLegForm