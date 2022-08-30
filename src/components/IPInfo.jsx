import React, { useContext } from "react";

import classes from '../styles/IPInfo.module.css'

import IpContext from "./store/ip-context";

const IPInfo = () => {

    const ctx = useContext(IpContext);

    return (<div className={classes.IpInfo}>
        <section className={classes['IPInfo-section']}>
            <div>
                <p>IP ADDRESS</p>
                <h1>{ctx.IpInfo.ip}</h1>
            </div>
            <div>
                <p>LOCATION</p>
                <h1>{ctx.IpInfo.country}, {ctx.IpInfo.region}</h1>
            </div>
            <div>
                <p>TIMEZONE</p>
                <h1>UTC {ctx.IpInfo.timeZone}</h1>
            </div>
            <div>
                <p>ISP</p>
                <h1>{ctx.IpInfo.isp}</h1>
            </div>
        </section>
    </div>
    )
};

export default IPInfo;