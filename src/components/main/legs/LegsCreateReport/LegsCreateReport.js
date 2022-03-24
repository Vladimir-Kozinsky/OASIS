import React from 'react'
import Button from '../../../../common/buttons/Button';
import LegsFinder from '../LegsChange/LegsFinder/LegsFinder';
import s from './LegsCreateReport.module.css'


class LegsCreateReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: null,
            to: null
        }
        this.legsRequest = this.legsRequest.bind(this);
    }

    legsRequest(from, to) {
        this.setState({ from: from });
        this.setState({ to: to });
        this.props.getLegs(this.props.aircraft, this.state.from, this.state.to)
    }

    render() {
        return (
            <div className={s.legsCreateReport}>
                <LegsFinder legsRequest={this.legsRequest} />
                legsCreateReport
                <div className={s.controlPanel}>
                    <Button event={this.props.setCreteReportMode} text='Cancel' />
                    <Button text="Print Report" />
                </div>
            </div>
        )
    }
}

export default LegsCreateReport