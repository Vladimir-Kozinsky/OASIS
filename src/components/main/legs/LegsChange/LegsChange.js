import React from 'react'
import Button from '../../../../common/buttons/Button';
import s from './LegsChange.module.css'
import LegsFinder from './LegsFinder/LegsFinder';

const LegsChange = (props) => {

    return (
        <div className={s.changeLegsContainer}>

            <LegsFinder />

                <div className={s.controlPanel}>
                    <Button text='Save' />
                    <Button event={props.setChangeMode} text="Cancel" />
                </div>
        </div>
    )
}

export default LegsChange;