import React from 'react'
import Button from '../../../../common/buttons/Button';
import LegsAddForm from '../LegsAddForm/LegsAddForm';
import LegsBlock from './LegsBlock/LegsBlock';
import s from './LegsChange.module.css'
import LegsFinder from './LegsFinder/LegsFinder';

class LegsChange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            changeMode: false,
            from: null,
            to: null,
            choosedLegs: null
        }

        this.legsRequest = this.legsRequest.bind(this);
        this.pageRequest = this.pageRequest.bind(this);
        this.setChoosedLegs = this.setChoosedLegs.bind(this);
        this.changeLegField = this.changeLegField.bind(this);
        this.setChangeLegsMode = this.setChangeLegsMode.bind(this);
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
        this.props.getLegs(this.props.aircraft, this.state.from, this.state.to, page)
    }

    setChoosedLegs(choosedLegs) {
        this.setState({ choosedLegs: choosedLegs });
    }

    changeLegField() {
        console.log(this.state.choosedLegs)
        if (this.state.choosedLegs) {
            return this.state.choosedLegs.map((el) => {
                const leg = this.props.legs.legs.find((leg) => leg._id === el)
                return (
                    <LegsAddForm leg={leg} />
                )
            })
        }
    }
    setChangeLegsMode() {
        if (this.state.changeMode === false) {
            this.setState({ changeMode: true })
        } else {
            this.setState({ changeMode: true })
        }
    }



    render() {
        return (
            <div className={s.changeLegsContainer}>
                <LegsFinder legsRequest={this.legsRequest} aircraft={this.props.aircraft} />
                {this.props.legs
                    ? <LegsBlock
                        setChangeLegsMode={this.setChangeLegsMode}
                        setChoosedLegs={this.setChoosedLegs}
                        pageRequest={this.pageRequest}
                        legs={this.props.legs.legs}
                        totalPages={this.props.legs.totalPages}
                        selectedPage={this.props.legs.selectedPage}
                        setChangeMode={this.props.setChangeMode} />
                    : null}
                {this.state.changeMode
                    ? this.changeLegField()
                    : null}
            </div>
        )
    }
}

export default LegsChange;