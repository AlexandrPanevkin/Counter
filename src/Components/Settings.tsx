import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import s from './Settings.module.css'

type SettingsPropsType = {
    counterValue: number | string
    startValue: number
    maxValue: number
    setSettingsMaxValue: (value: number) => void
    setSettingsStartValue: (value: number) => void
    setSettingsCounterValue: () => void
    error: boolean
    setCounterValue: (counterValue: number | string) => void
}

export const Settings = (props: SettingsPropsType) => {
    const onInputMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSettingsMaxValue(+e.currentTarget.value)
    }
    const onInputStartChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSettingsStartValue(+e.currentTarget.value)
    }

    const onClickSetValueHandler = () => {
        props.setSettingsCounterValue()
    }

    return (
        <div>
            <div className={s.settingsValue}>
                <div className={s.inputBox}>
                        <span className={s.inputValueName}>
                            max value:
                        </span>
                    <span className={s.inputValue}>
                               <input className={props.error ? s.inputError : s.input} type="number"
                                      value={props.maxValue}
                                      onChange={onInputMaxChangeHandler}/>
                        </span>
                </div>

                <div className={s.inputBox}>
                    <span className={s.inputValueName}>start value:</span>
                    <span className={s.inputValue}> <input className={props.error ? s.inputError : s.input}
                                                           type="number" value={props.startValue}
                                                           onChange={onInputStartChangeHandler}/></span>

                </div>

                <div></div>
            </div>
            <div className={s.setBox}>
                <Button onClickCallback={onClickSetValueHandler} buttonName={'set'}
                        disabled={typeof props.counterValue === 'number' || props.error}/>
            </div>
        </div>
    )
};
