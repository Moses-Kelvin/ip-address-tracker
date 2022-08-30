import React from "react";

import classes from '../styles/Header.module.css'

import Input from "./Input";

const Header = () => {
    return (
        <header className={classes.header}>
            <h1>IP Address Tracker</h1>
            <Input />
        </header>
    )
};

export default Header;