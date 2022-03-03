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
    { msn: 24985, FH: 24999, FC: 24888 },
    { msn: 32546, FH: 32999, FC: 32888 },
    { msn: 25896, FH: 25999, FC: 25888 },
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
    }

}