import React from 'react';
import {CounterValueType} from "../App";
import s from './Counter.module.css'
import {Button} from "./Button";

type CounterPropsType = {
    counterValue: CounterValueType
    increaseCounterValue: (incValue: CounterValueType) => void
    resetCounterValue: () => void
}

export const Counter = (props: CounterPropsType) => {
    const incOnClickHandler = () => {
        props.increaseCounterValue(props.counterValue)
    }
    const resetOnClickHandler = () => {
        props.resetCounterValue()
    }

    return (
        <div>
            <div className={props.counterValue === 5 ? s.CounterRedValue : s.CounterValue}>
                {props.counterValue}
            </div>
            <div className={s.incResetBox}>
                <Button disabled={props.counterValue === 5} counterValue={5} onClickCallback={incOnClickHandler}
                        buttonName={'inc'}/>
                <Button disabled={props.counterValue === 0} counterValue={0} onClickCallback={resetOnClickHandler}
                        buttonName={'reset'}/>
            </div>
        </div>
    );
};
