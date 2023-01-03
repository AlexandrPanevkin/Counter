import React from 'react';
import s from "./Counter.module.css";

type ButtonPropsType = {
    onClickCallback: () => void
    buttonName: string
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickCallBack = () => {
        props.onClickCallback()
    }
    return (
        <button disabled={props.disabled} className={s.button} onClick={onClickCallBack}><span className={s.incResetValue}>{props.buttonName}</span></button>
    );
};
