import React from 'react';
import s from './Counter.module.css'
import {Button} from "./Button";

type CounterPropsType = {
    counterValue: number | string
    increaseCounterValue: (incValue: number) => void
    resetCounterValue: () => void
    startValue: number
    maxValue: number
    error: boolean
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
            <div
                className={props.counterValue === props.maxValue ? s.CounterRedValue : props.error ? s.CounterTextError : typeof props.counterValue === 'string' ? s.textCounterValue : s.CounterValue}>
                {props.error ? <div>Incorrect value!</div> : props.counterValue}
            </div>
            <div className={s.incResetBox}>
                <Button disabled={props.counterValue === props.maxValue || typeof props.counterValue === 'string'}
                        onClickCallback={incOnClickHandler}
                        buttonName={'inc'}/>
                <Button disabled={props.counterValue === props.startValue || typeof props.counterValue === 'string'}
                        onClickCallback={resetOnClickHandler}
                        buttonName={'reset'}/>
            </div>
        </div>
    );
};
