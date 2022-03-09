import React from 'react'
import Button from '../../../../common/buttons/Button';
import LegsBlock from './LegsBlock/LegsBlock';
import s from './LegsChange.module.css'
import LegsFinder from './LegsFinder/LegsFinder';

const LegsChange = (props) => {

    return (
        <div className={s.changeLegsContainer}>
            <LegsFinder />
            <LegsBlock legs={props.legs} />
            <div className={s.controlPanel}>
                <Button event={props.setChangeMode} text="Cancel" />
                <Button text='Edit' />
            </div>
        </div>
    )
}

export default LegsChange;