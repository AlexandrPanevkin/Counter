import React from 'react';
import s from './App.module.css'
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";
import {AppRootStateType} from "./State/store";
import {useDispatch, useSelector} from "react-redux";
import {
    increaseCounterValueAC,
    resetCounterValueAC, setErrorAC, setSettingsCounterValueAC,
    setSettingsMaxValueAC,
    setSettingsStartValueAC
} from "./State/counterReducer";


export type stateType = {
    startValue: number
    counterValue: number | string
    maxValue: number
    error: boolean
}

function App() {

    let counter = useSelector<AppRootStateType, stateType>(state => state.counter)
    const dispatch = useDispatch()

    const setSettingsStartValue = (value: number) => {
        dispatch(setSettingsStartValueAC(value))
    }

    const setSettingsMaxValue = (value: number) => {
        dispatch(setSettingsMaxValueAC(value))
    }

    const setSettingsCounterValue = () => {
        dispatch(setSettingsCounterValueAC())
    }


    const increaseCounterValue = (incValue: number) => {
        dispatch(increaseCounterValueAC(incValue))
    }

    const resetCounterValue = () => {
        dispatch(resetCounterValueAC())
    }

    // useEffect(() => {
    //         dispatch(setErrorAC())
    // }, [counter.startValue, counter.maxValue])

    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('startValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setStartValue(newValue)
    //         setCounterValue(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // }, [startValue])
    //
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('maxValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setMaxValue(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [maxValue])

    return (
        <div className={s.App}>
            <div className={s.Settings}>
                <Settings setSettingsMaxValue={setSettingsMaxValue} setSettingsStartValue={setSettingsStartValue}
                          startValue={counter.startValue} maxValue={counter.maxValue}
                          counterValue={counter.counterValue}
                          setSettingsCounterValue={setSettingsCounterValue}
                          error={counter.error}
                />
            </div>
            <div className={s.Counter}>
                <Counter
                    counterValue={counter.counterValue}
                    increaseCounterValue={increaseCounterValue}
                    resetCounterValue={resetCounterValue}
                    startValue={counter.startValue}
                    maxValue={counter.maxValue}
                    error={counter.error}
                />
            </div>
        </div>
    );
}

export default App;
