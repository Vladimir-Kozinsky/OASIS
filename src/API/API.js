import axios from "axios";

const proxy = axios.create({
    baseURL: "http://localhost:5000"
})

const aircrafts = [
    { value: '24985', label: '24985' },
    { value: '32546', label: '32546' },
    { value: '25896', label: '25896' }
]

const aircraftsData = [
    {
        msn: 24985, FH: '24999', FC: '24888', legs: [
            {
                depDate: '25.04.2018',
                flightNumber: 'ER425',
                from: 'EDDT',
                to: 'EDDE',
                blockOff: '15:44',
                takeOff: '15:50',
                landing: '18:00',
                blockOn: '18:10',
                flightTime: '23:45',
                blockTime: '23:45',
                curentFH: '23:45',
                curentFC: '23:45'
            }
        ]
    },
    { msn: 32546, FH: 32999, FC: 32888, legs: [] },
    { msn: 25896, FH: 25999, FC: 25888, legs: [] },
]


export const aircraftAPI = {
    getAircrafts() {
        return proxy.get('/aircrafts', {
        }).then(response => response.data)
    },
    getAircraftData(msn) {
        return proxy.get('/aircrafts/aircraft/data', {
            params: { msn: msn }
        }).then(response => response.data)
    },
    getLastLegs(msn) {
        return proxy.get('/aircrafts/aircraft/legs/last', {
            params: { msn: msn }
        }).then(response => response.data)
    },
    getLegs(msn, from, to, selectedPage) {
        return proxy.get('/aircrafts/aircraft/legs', {
            params: {
                msn: msn,
                from: from,
                to: to,
                selectedPage: selectedPage
            }
        }).then(response => response.data)
    },
    addLeg(msn, leg) {
        return proxy.post('/aircrafts/legs/add', { msn, leg }).then(response => response.data)
    },

    addAircraft(msn, FH, FC, leg) {
        return proxy.post('/aircrafts/add', aircraftsData[0]).then(response => response.data)
    },

    delLeg(msn, legId) {
        return proxy.post('/aircrafts/legs/del', { msn, legId }).then(response => response.data)
    }
}

//aircraftAPI.addAircraft()