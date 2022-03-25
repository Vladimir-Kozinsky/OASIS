import React from 'react'
import Button from '../../../../common/buttons/Button';
import LegsFinder from '../LegsChange/LegsFinder/LegsFinder';
import Pagenator from './../LegsChange/LegsBlock/Pagenator/Pagenator';
import s from './LegsCreateReport.module.css'
import ReactToPrint from 'react-to-print';


class LegsCreateReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: null,
            to: null
        }
        this.legsRequest = this.legsRequest.bind(this);
        this.legs = this.legs.bind(this);
        this.pageRequest = this.pageRequest.bind(this);
    }

    componentDidMount() {
        if (this.props.aircraft) {
            this.props.getLegs(this.props.aircraft)
        }
    }

    legsRequest(from, to) {
        this.setState({ from: from });
        this.setState({ to: to });
        this.props.getLegs(this.props.aircraft, this.state.from, this.state.to, 'all')
    }

    pageRequest(page) {
        this.props.getLegs(this.props.aircraft, this.state.from, this.state.to, page)
    }

    legs() {
        if (this.props.legs) {
            return this.props.legs.legs.map((leg) => {
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

    render() {
        return (
            <div className={s.legsCreateReport}>
                <LegsFinder legsRequest={this.legsRequest} />
                {/* {this.props.legs && <Pagenator
                    legs={this.props.legs.legs}
                    pageRequest={this.pageRequest}
                    totalPages={this.props.legs.totalPages}
                    selectedPage={this.props.legs.selectedPage} />} */}

                <ReactToPrint
                    trigger={() => {
                        return <a href="#">Print this out!</a>;
                    }}
                    content={() => this.componentRef}
                    documentTitle={'Tiitle doc'}
                />

                <div ref={el => (this.componentRef = el)} className={s.legs_block} >
                    <div className={s.leg_block}>
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


                <div className={s.controlPanel}>
                    <Button event={this.props.setCreteReportMode} text='Cancel' />
                    <Button text="Print Report" />
                </div>
            </div>
        )
    }
}

export default LegsCreateReport