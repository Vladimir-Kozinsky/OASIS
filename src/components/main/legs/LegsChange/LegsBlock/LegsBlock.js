import s from './LegsBlock.module.css'
import Pagenator from './Pagenator/Pagenator';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '../../../../../common/buttons/Button';


const leg_block_class = s.leg_block + ' ' + s.active;

const LegsBlock = ({ legs, totalPages, pageRequest, selectedPage, setChoosedLegs, setChangeMode, setChangeLegsMode }) => {

    const legsPortion = () => {
        if (legs) {
            return legs.map((leg) => {
                return (
                    <div key={leg.Object_Id} className={s.leg_block}>
                        <div className={s.leg_block_item_checkbox}>
                            <Field className={s.checkbox} type='checkbox' id={leg._id} name={leg._id} />
                        </div>
                        <div className={s.leg_block_item}>
                            <span>{leg.depDate}</span>
                        </div>
                        <div className={s.leg_block_item_text}>
                            <span>{leg.flightNumber}</span>
                        </div>
                        <div className={s.leg_block_item_text}>
                            <span>{leg.from}</span>
                        </div>
                        <div className={s.leg_block_item_text}>
                            <span>{leg.to}</span>
                        </div>
                        <div className={s.leg_block_item}>
                            <span>{leg.blockOff}</span>
                        </div>
                        <div className={s.leg_block_item}>
                            <span>{leg.takeOff}</span>
                        </div>
                        <div className={s.leg_block_item}>
                            <span>{leg.landing}</span>
                        </div>
                        <div className={s.leg_block_item}>
                            <span>{leg.blockOn}</span>
                        </div>
                        <div className={s.leg_block_item_text}>
                            <span>{leg.flightTime}</span>
                        </div>
                        <div className={s.leg_block_item_text}>
                            <span>{leg.blockTime}</span>
                        </div>
                        <div className={s.leg_block_item_text}>
                            <span>{leg.fh}</span>
                        </div>
                        <div className={s.leg_block_item_text}>
                            <span>{leg.fc}</span>
                        </div>
                    </div>
                )
            })
        } else {
            return (
                <div className={s.legsMes_container}>
                    <span className={s.legsMes}>Legs not found</span>
                </div>
            )
        }
    }

    return (
        <div className={s.legs_block} >
            <Pagenator
                legs={legs}
                pageRequest={pageRequest}
                totalPages={totalPages}
                selectedPage={selectedPage} />
            <Formik
                initialValues={{}}
                validate={values => {
                    const errors = {};
                }}
                onSubmit={(values, { setSubmitting }) => {
                    let valuesArr = Object.keys(values)
                    setChoosedLegs(valuesArr)
                    setSubmitting(false)
                    setChangeLegsMode()
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
                        <div className={leg_block_class}>
                            <div className={s.leg_block_item_checkbox}>
                                <input className={s.checkbox} type='checkbox' disabled />
                            </div>
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
                        {legsPortion()}

                        <div className={s.controlPanel}>
                            <Button event={setChangeMode} text="Cancel" />
                            <Button text='Edit' type='submit' />
                        </div>
                    </Form>
                )}

            </Formik>








        </div>
    )
}

export default LegsBlock; 