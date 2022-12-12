import React from 'react';
import {CounterValueType} from "./App";
import s from './Counter.module.css'

type CounterPropsType = {
    counterValue: CounterValueType
    increaseCounterValue: (incValue: CounterValueType) => void
    resetCounterValue:()=>void
}

export const Counter = (props: CounterPropsType) => {
    const incOnClickHandler = (incValue: CounterValueType) => {
        props.increaseCounterValue(incValue)
    }
    const resetOnClickHandler = () => {
props.resetCounterValue()
    }
    return (
        <div>
            <div className={props.counterValue===5 ? s.CounterRedValue : s.CounterValue}>
                {props.counterValue}
            </div>
            <div className={s.incResetBox}>
                <button disabled={props.counterValue===5} className={s.incValue} onClick={() => incOnClickHandler(props.counterValue)}><span className={s.incResetValue}>inc</span></button>
                <button disabled={props.counterValue===0} className={s.resetValue} onClick={resetOnClickHandler}><span className={s.incResetValue}>reset</span></button>
            </div>
        </div>
    );
};
