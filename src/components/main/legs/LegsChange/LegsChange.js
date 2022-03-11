import React from 'react'
import Button from '../../../../common/buttons/Button';
import LegsBlock from './LegsBlock/LegsBlock';
import s from './LegsChange.module.css'
import LegsFinder from './LegsFinder/LegsFinder';

class LegsChange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            from: null,
            to: null,
            choosedLegs: null
        }

        this.legsRequest = this.legsRequest.bind(this);
        this.pageRequest = this.pageRequest.bind(this);
        this.setChoosedLegs = this.setChoosedLegs.bind(this);
    }

    componentDidMount() {
        if (this.props.aircraft) {
            this.props.getLegs(this.props.aircraft)
        }
    }

    legsRequest(from, to) {
        this.setState({ from: from });
        this.setState({ to: to });
        this.props.getLegs(this.props.aircraft, this.state.from, this.state.to)
    }

    pageRequest(page) {
        console.log(page)
        this.props.getLegs(this.props.aircraft, this.state.from, this.state.to, page)
    }

    setChoosedLegs(choosedLegs) {
        this.setState({ choosedLegs: choosedLegs });
    }



    render() {
        return (
            <div className={s.changeLegsContainer}>
                <LegsFinder legsRequest={this.legsRequest} aircraft={this.props.aircraft} />
                {this.props.legs
                    ? <LegsBlock
                        setChoosedLegs={this.setChoosedLegs}
                        pageRequest={this.pageRequest}
                        legs={this.props.legs.legs}
                        totalPages={this.props.legs.totalPages}
                        selectedPage={this.props.legs.selectedPage} /> : null}
                <div className={s.controlPanel}>
                    <Button event={this.props.setChangeMode} text="Cancel" />
                    <Button text='Edit' />
                </div>
            </div>
        )
    }
}

export default LegsChange;