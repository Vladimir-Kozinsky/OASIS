import React from 'react'
import Button from '../../../common/buttons/Button';
import s from './Legs.module.css'
import LegsAddForm from './LegsAddForm/LegsAddForm';
import LegsChange from './LegsChange/LegsChange';

const leg_block_class = s.leg_block + ' ' + s.active;

class Legs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddForm: false,
            isChangeMode: false
        }
        this.onChange = this.legs.bind(this);
        this.setChangeMode = this.setChangeMode.bind(this);
        this.addLegForm = this.addLegForm.bind(this);
    }
    componentDidMount() {
        if (this.props.aircraft) {
            this.props.getLegs(this.props.aircraft)
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.aircraft !== prevProps.aircraft) {
            this.props.getLegs(this.props.aircraft)
        }
    }
    legs() {
        if (this.props.legs) {
            return this.props.legs.map((leg) => {
                return (
                    <div key={leg.Object_Id} className={s.leg_block}>
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

    setChangeMode() {
        if (this.state.isChangeMode) {
            this.setState({ isChangeMode: false });
        } else {
            this.setState({ isChangeMode: true });
        }
    }

    addLegForm() {
        if (this.state.isAddForm) {
            this.setState({ isAddForm: false });
        } else {
            this.setState({ isAddForm: true });
        }
    }

    render() {
        return (
            <div className={s.legs}>
                {this.state.isChangeMode
                    ? <LegsChange setChangeMode={this.setChangeMode} />
                    : <div className={s.lastLegsContainer}>
                        <h6 className={s.lastLegsContainerTitle}>Last 10 legs</h6>
                        <div className={s.last_legs_block} >
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
                            {this.legs()}
                        </div>
                        {this.state.isAddForm
                            ? <LegsAddForm
                                aircraftData={this.props.aircraftData}
                                msn={this.props.aircraft}
                                addLeg={this.props.addLeg}
                                addLegForm={this.addLegForm} />
                            : null
                        }
                        {!this.state.isAddForm
                            ? <div className={s.controlPanel}>
                                <Button event={this.addLegForm} text='Add Leg' />
                                <Button event={this.setChangeMode} text="Edit Mode" />
                            </div>
                            : null
                        }
                    </div>}

            </div>
        )
    }
}

export default Legs