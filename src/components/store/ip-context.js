import React from "react";

const IpContext = React.createContext({
    IpInfo: {
        ip: '',
        country: '',
        region: '',
        timeZone: '',
        isp: '',
        lat: '',
        lng: ''
    },
    userInput: '',
    fetchData: () => {}
});

export default IpContext;