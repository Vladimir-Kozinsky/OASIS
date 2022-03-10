import React from 'react'
import Button from '../../../../common/buttons/Button';
import LegsBlock from './LegsBlock/LegsBlock';
import s from './LegsChange.module.css'
import LegsFinder from './LegsFinder/LegsFinder';

class LegsChange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        if (this.props.aircraft) {
            this.props.getLegs(this.props.aircraft)
        }
        console.log(this.props)
    }

    render() {
        return (
            <div className={s.changeLegsContainer}>
                <LegsFinder />
                {/* <LegsBlock legs={this.props.legs.legs} totalPages={this.props.legs.totalPages} /> */}
                <div className={s.controlPanel}>
                    <Button event={this.props.setChangeMode} text="Cancel" />
                    <Button text='Edit' />
                </div>
            </div>
        )
    }
}

export default LegsChange;