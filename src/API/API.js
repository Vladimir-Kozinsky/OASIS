// import axios from "axios";

// const proxy = axios.create({
//     baseURL: "http://localhost:4000/"

// })
const aircrafts = [
    { value: '24985', label: '24985' },
    { value: '32546', label: '32546' },
    { value: '25896', label: '25896' }
]

const aircraftsData = [
    {
        msn: 24985, FH: 24999, FC: 24888, legs: [
            {
                depDate: '25.04.2018',
                flightNumber: 'ER425',
                from: 'EDDT',
                to: 'EDDE',
                blockOff: '15:44',
                takeOff: '15:50',
                landing: '18:00',
                blockOn: '18:10'
            },
            {
                depDate: '25.04.2018',
                flightNumber: 'ER425',
                from: 'EDDT',
                to: 'EDDE',
                blockOff: '15:44',
                takeOff: '15:50',
                landing: '18:00',
                blockOn: '18:10'
            },
            {
                depDate: '25.04.2018',
                flightNumber: 'ER425',
                from: 'EDDT',
                to: 'EDDE',
                blockOff: '15:44',
                takeOff: '15:50',
                landing: '18:00',
                blockOn: '18:10'
            },

        ]
    },
    { msn: 32546, FH: 32999, FC: 32888, legs: [] },
    { msn: 25896, FH: 25999, FC: 25888, legs: [] },
]


export const aircraftAPI = {
    getAircrafts() {
        return aircrafts
        // proxy.get('aircraft/info/', {
        //     params: { msn: msn }
        // }).then(response => response.data)
    },
    getAircraftData(msn) {
        const aircraftData = aircraftsData.find(el => el.msn == msn)
        return aircraftData
    },
    getLegs(msn) {
        const aircraftData = aircraftsData.find(el => el.msn == msn)
        return aircraftData.legs
    },
    addLeg(msn, leg) {
        const aircraftData = aircraftsData.find(el => el.msn == msn)
        aircraftData.legs.push(leg)
        return aircraftData.legs
    }
}