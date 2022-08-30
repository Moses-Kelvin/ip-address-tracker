import React, { useState, useEffect } from "react";

import IpContext from "./ip-context";


const IpContextProvider = (props) => {

    const [userInput, setUserInput] = useState('');

    const [IpInfo, setIpInfo] = useState({
        ip: '192.212.174.101',
        country: 'Brooklyn',
        region: 'Ny 10001',
        timeZone: '-05:00',
        isp: 'SpaceX Starlink',
        lat: '',
        lng: ''
    });


    let end_point = 'https://geo.ipify.org/api/v1?';
    let IpAddurl = end_point + 'apiKey=' + process.env.REACT_APP_API_KEY + '&ipAddress=' + userInput;
    let domainUrl = end_point + 'apiKey=' + process.env.REACT_APP_API_KEY + '&domain=' + userInput;
    let url;

    const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;


    const fetchData = async () => {
        try {
            if (regexExp.test(userInput)) {
                url = IpAddurl
            } else {
                url = domainUrl
            }

            const respone = await fetch(url);
            const data = await respone.json();
            setIpInfo({
                ip: data.ip,
                country: data.location.country,
                region: data.location.region,
                timeZone: data.location.timezone,
                isp: data.isp,
                lat: data.location.lat,
                lng: data.location.lng
            });

        } catch (e) {
            console.log(e)
        }
    }
     
    useEffect(() => {
        const url = 'https://geo.ipify.org/api/v1?apiKey=' + process.env.REACT_APP_API_KEY;
        fetch(url).then(respone =>
            respone.json()
        ).then(data => 
             setIpInfo({
                ip: data.ip,
                country: data.location.country,
                region: data.location.region,
                timeZone: data.location.timezone,
                isp: data.isp,
                lat: data.location.lat,
                lng: data.location.lng
            })
          )
    }, [])



    return <IpContext.Provider
        value={{
            userInput: userInput,
            fetchData: fetchData,
            IpInfo: IpInfo,
            setUserInput: setUserInput
        }}>
        {props.children}
    </IpContext.Provider>
};

export default IpContextProvider;