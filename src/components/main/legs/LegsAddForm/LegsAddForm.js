import Button from '../../../../common/buttons/Button'
import s from './LegsAddForm.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { addLeg } from '../../../../store/redusers/legsReduser';

const FH = '48922:02'
const takeOff = '22:44'
const landing = '23:46'
const flightDate = '2022-03-02'

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
    const time_to_arr = (time) => {
        const arr = time.split(':')
        return arr
    }
    const date_to_arr = (date) => {
        const arr = date.split('-')
        return arr
    }
    const start_time_arr = time_to_arr(start_time)
    const end_time_arr = time_to_arr(end_time)
    const start_date_arr = date_to_arr(start_date)
    const end_date_arr = (end_time_arr[0] - start_time_arr[0] > 0) ? date_to_arr(start_date) : [start_date_arr[0], start_date_arr[1], `${+start_date_arr[2] + 1}`]

    const start_moment = new Date(start_date_arr[0], start_date_arr[1], start_date_arr[2], start_time_arr[0], start_time_arr[1])
    const end_moment = new Date(end_date_arr[0], end_date_arr[1], end_date_arr[2], end_time_arr[0], end_time_arr[1])

    const time_period_mm = (end_moment - start_moment) / 60000
    return time_period_mm
}

const calculateFH = (fh, mm) => {
    const fh_to_min = (fh) => {
        const arr = fh.split(':')
        const mm = (+arr[0] * 60) + (+arr[1])
        return mm
    }

    const HH = Math.floor((fh_to_min(fh) + time_subtraction(flightDate, takeOff, landing)) / 60)
    const MM = (fh_to_min(fh) + time_subtraction(flightDate, takeOff, landing)) % 60

    const final_fh = `${HH}:${MM}`
    return final_fh
}

const calculateFC = (fc) => {
    return +fc + 1
}

const calculate_time_to_str = (mm) => {
    return `${Math.floor(mm) / 60}:${mm % 60}`
}

console.log(time_subtraction(flightDate, takeOff, landing))
console.log(calculateFH(FH, time_subtraction(flightDate, takeOff, landing)))

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
                <div className={s.leg_block_item}>
                    <span>FH</span>
                </div>
                <div className={s.leg_block_item}>
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
                    fh: '21:44',
                    fc: '21:44',
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
                    console.log(values)
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
                        <div className={s.leg_block_item}>
                            <Field className={s.leg_block_text} type='text' id='fh' name='fh' placeholder='none' disabled />
                        </div>
                        <div className={s.leg_block_item}>
                            <Field className={s.leg_block_text} type='text' id='fc' name='fc' placeholder='none' disabled />
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