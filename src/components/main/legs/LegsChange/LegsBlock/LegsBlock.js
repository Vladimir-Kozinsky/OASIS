import s from './LegsBlock.module.css'
import Pagenator from './Pagenator/Pagenator';
import { useState } from 'react';

const leg_block_class = s.leg_block + ' ' + s.active;

const LegsBlock = ({ legs }) => {

    
    const [selectedPage, setSelectedPage] = useState(1)
    const [lastPage, setLastPage] = useState((legs.length % 10) !== 0
        ? Math.floor(legs.length / 10) + 1
        : Math.floor(legs.length / 10))

    const onPageChanged = (p) => {
        setSelectedPage(p)
    }

    const legsPortion = () => {
        const startLeg = (selectedPage - 1) * 10
        const endLeg = startLeg + 10
        const legsToMap = legs.slice(startLeg, endLeg)
        if (legs) {
            return legsToMap.map((leg) => {
                return (
                    <div key={leg.Object_Id} className={s.leg_block}>
                        <div className={s.leg_block_item_checkbox}>
                            <input className={s.checkbox} type='checkbox' />
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
                selectedPage={selectedPage}
                onPageChanged={onPageChanged}
                setSelectedPage={setSelectedPage}
                lastPage={lastPage} />
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
        </div>
    )
}

export default LegsBlock; 