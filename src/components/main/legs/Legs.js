import React from 'react'
import Button from '../../../common/buttons/Button';
import s from './Legs.module.css'
import LegsAddForm from './LegsAddForm/LegsAddForm';

const leg_block_class = s.leg_block + ' ' + s.active;

class Legs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddForm: false
        }
        this.onChange = this.legs.bind(this);
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

        console.log('did update')
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
                        <div className={s.leg_block_item}>
                            <span>{leg.fh}</span>
                        </div>
                        <div className={s.leg_block_item}>
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
                            <div className={s.leg_block_item}>
                                <span>FH</span>
                            </div>
                            <div className={s.leg_block_item}>
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
                            <Button text='Edit Mode' />
                        </div>
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default Legs