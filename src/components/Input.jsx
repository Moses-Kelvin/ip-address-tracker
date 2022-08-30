import React, { useContext, useRef } from "react";

import classes from '../styles/Input.module.css'

import arrow from '../assets/icon-arrow.svg'

import IpContext from "./store/ip-context";

const Input = () => {

    const InputRef = useRef();

    const ctx = useContext(IpContext);

    const inputChangeHandler = (e) => {
        ctx.setUserInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (ctx.userInput.trim().length === 0) {
            return InputRef.current.focus();
        }
        ctx.fetchData();
        ctx.setUserInput('');
        InputRef.current.focus();
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <input type='text' value={ctx.userInput}
                ref={InputRef}
                onChange={inputChangeHandler}
                placeholder="Search by ip adress or domain" />
            <button><img alt="arrow" src={arrow} /></button>
        </form>
    )
};

export default Input;