import React from 'react';
import {CounterValueType} from "../App";
import s from './Counter.module.css'
import {Button} from "./Button";

type CounterPropsType = {
    counterValue: CounterValueType
    increaseCounterValue: (incValue: number) => void
    resetCounterValue: () => void
    startValue: number
    maxValue: number
}

export const Counter = (props: CounterPropsType) => {
    const incOnClickHandler = () => {
        props.increaseCounterValue(+props.counterValue)
    }
    const resetOnClickHandler = () => {
        props.resetCounterValue()
    }

    return (
        <div>
            <div className={props.counterValue === props.maxValue ? s.CounterRedValue : typeof props.counterValue === 'string' ? s.textCounterValue : s.CounterValue}>
                {props.counterValue}
            </div>
            <div className={s.incResetBox}>
                <Button disabled={props.counterValue === props.maxValue || typeof props.counterValue === 'string'}  onClickCallback={incOnClickHandler}
                        buttonName={'inc'}/>
                <Button disabled={props.counterValue === props.startValue || typeof props.counterValue === 'string'} onClickCallback={resetOnClickHandler}
                        buttonName={'reset'}/>
            </div>
        </div>
    );
};
