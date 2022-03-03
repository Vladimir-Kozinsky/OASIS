import React from 'react'
import s from './Legs.module.css'

const legsArr = [
    { date: '25.04.2018' }
]

const legs = legsArr.map((leg) => {
    <div className={s.leg_block}>
        {leg.date}
    </div>
})

class Legs extends React.Component {
    render() {
        return (
            <div className={s.legs}>
                <div className={s.lastLegsContainer}>
                    <h3 className={s.lastLegsContainerTitle}>Last 10 legs</h3>
                    <div className={s.last_legs_block} >
                        {legs}
                    </div>

                </div>

            </div>
        )
    }
}

export default Legs