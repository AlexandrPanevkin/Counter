import React from 'react';
import { Button } from './Button';
import s from './Settings.module.css'

type SettingsPropsType = {
    counterValue: number
}

export const Settings = (props: SettingsPropsType) => {
    return (
        <div>
            <div className={s.settingsValue}>
                <div>
                    max value:
                    <input type="number"/>
                    start value:
                    <input type="number"/>
                </div>
                <div></div>
            </div>
            <div className={s.setBox}>
               <Button counterValue={props.counterValue} onClickCallback={()=>{}} buttonName={'set'} disabled={false}/>
            </div>
        </div>
    )
};
