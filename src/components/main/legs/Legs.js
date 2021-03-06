import React from 'react'
import Button from '../../../common/buttons/Button';
import s from './Legs.module.css'
import LegsAddForm from './LegsAddForm/LegsAddForm';
import LegsChange from './LegsChange/LegsChange';
import LegsCreateReport from './LegsCreateReport/LegsCreateReport';

const leg_block_class = s.leg_block + ' ' + s.active;

class Legs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddForm: false,
            isChangeMode: false,
            isCreteReportMode: false
        }
        this.onChange = this.legs.bind(this);
        this.setChangeMode = this.setChangeMode.bind(this);
        this.addLegForm = this.addLegForm.bind(this);
        this.setCreteReportMode = this.setCreteReportMode.bind(this);
    }
    componentDidMount() {
        if (this.props.aircraft) {
            this.props.getLastLegs(this.props.aircraft)
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.aircraft !== prevProps.aircraft) {
            this.props.getLastLegs(this.props.aircraft)
        }

        if (this.props.aircraftData !== prevProps.aircraftData) {
            this.props.getLastLegs(this.props.aircraft)
        }

    }
    legs() {
        if (this.props.lastLegs) {
            return this.props.lastLegs.map((leg) => {
                return (
                    <div key={leg.id} className={s.leg_block}>
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

    setCreteReportMode() {
        if (this.state.isCreteReportMode) {
            this.setState({ isCreteReportMode: false });
        } else {
            this.setState({ isCreteReportMode: true });
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
                {this.state.isChangeMode && <LegsChange
                    updateLegMes={this.props.updateLegMes}
                    updateLeg={this.props.updateLeg}
                    aircraftData={this.props.aircraftData}
                    getAircraftData={this.props.getAircraftData}
                    aircraft={this.props.aircraft}
                    getLegs={this.props.getLegs}
                    legs={this.props.legs}
                    setChangeMode={this.setChangeMode}
                    delLeg={this.props.delLeg} />}
                {!this.state.isChangeMode
                    && !this.state.isCreteReportMode
                    && <div className={s.lastLegsContainer}>
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
                                <Button event={this.setCreteReportMode} text="Create report" />
                            </div>
                            : null
                        }
                    </div>}
                {this.state.isCreteReportMode
                    && <LegsCreateReport
                        setCreteReportMode={this.setCreteReportMode}
                        aircraft={this.props.aircraft}
                        getLegs={this.props.getLegs}
                        legs={this.props.legs} />}

            </div>
        )
    }
}

export default Legs