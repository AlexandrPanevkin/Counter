import React from 'react';
import s from "./Counter.module.css";

type ButtonPropsType = {
    counterValue: number
    onClickCallback: () => void
    buttonName: string
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickCallBack = () => {
        props.onClickCallback()
    }
    return (
        <button disabled={props.disabled} className={s.incValue} onClick={onClickCallBack}><span className={s.incResetValue}>{props.buttonName}</span></button>
    );
};
