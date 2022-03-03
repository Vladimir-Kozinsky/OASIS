import React from 'react'
import s from './Legs.module.css'



const leg_block_class = s.leg_block + ' ' + s.active;

class Legs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aircraftData: {}
        }
        this.onChange = this.legs.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.aircraftData !== prevProps.aircraftData) {
            this.props.getLegs(this.props.aircraftData.msn)
        }
    }

    legs() {
        if (this.props.legs) {
            return this.props.legs.map((leg) => {
                return (
                    <div className={s.leg_block}>
                        <div className={s.leg_block_item}>
                            <span>{leg.depDate}</span>
                        </div>
                        <div className={s.leg_block_item}>
                            <span>{leg.flightNumber}</span>
                        </div>
                        <div className={s.leg_block_item}>
                            <span>{leg.from}</span>
                        </div>
                        <div className={s.leg_block_item}>
                            <span>{leg.to}</span>
                        </div>
                        <div className={s.leg_block_item}>
                            <span>{leg.blockOFF}</span>
                        </div>
                        <div className={s.leg_block_item}>
                            <span>{leg.takeOff}</span>
                        </div>
                        <div className={s.leg_block_item}>
                            <span>{leg.landing}</span>
                        </div>
                        <div className={s.leg_block_item}>
                            <span>{leg.blockON}</span>
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

    render() {
        return (
            <div className={s.legs}>
                <div className={s.lastLegsContainer}>
                    <h6 className={s.lastLegsContainerTitle}>Last 10 legs</h6>
                    <div className={s.last_legs_block} >
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
                        {this.legs()}
                    </div>
                    <div className={s.controlPanel}>

                    </div>
                </div>
            </div>
        )
    }
}

export default Legs