import React, {useState} from 'react';
import s from './App.module.css'
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";

export type CounterValueType = number | string

function App() {
    const [counterValue, setCounterValue] = useState<CounterValueType>(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [error, setError] = useState(false)

    const setSettingsMaxValue = (value: number) => {
        if(value<= startValue || value<=0) {
            setError(true)
        } else {
            setError(false)
        }
        setMaxValue(value)
        setCounterValue("enter values and press 'set' ")
    }
    console.log(error)
    const setSettingsStartValue = (value: number) => {
        setCounterValue("enter values and press 'set' ")
        setStartValue(value)

    }

    const setSettingsCounterValue = () => {
        setCounterValue(startValue)
    }

    const increaseCounterValue = (incValue: number) => {
        return incValue >= startValue && incValue <= maxValue ? setCounterValue(incValue + 1) : counterValue

    }

    const resetCounterValue = () => {
        setCounterValue(startValue)
    }

    return (
        <div className={s.App}>
            <div className={s.Settings}>
                <Settings setSettingsMaxValue={setSettingsMaxValue} setSettingsStartValue={setSettingsStartValue}
                          startValue={startValue} maxValue={maxValue} counterValue={counterValue}
                          setSettingsCounterValue={setSettingsCounterValue}
                />
            </div>
            <div className={s.Counter}><Counter
                counterValue={counterValue}
                increaseCounterValue={increaseCounterValue}
                resetCounterValue={resetCounterValue}
                startValue={startValue}
                maxValue={maxValue}
            /></div>
        </div>
    );
}

export default App;
