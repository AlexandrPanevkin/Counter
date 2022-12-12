import React, {useState} from 'react';
import s from './App.module.css'
import {Counter} from "./Counter";

export type CounterValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    let [counterValue, setCounterValue] = useState<CounterValueType>(0)


    const increaseCounterValue = (incValue: CounterValueType) => {
        if (incValue === 0) {
            setCounterValue(1)
        } else if (incValue === 1) {
            setCounterValue(2)
        } else if (incValue === 2) {
            setCounterValue(3)
        } else if (incValue === 3) {
            setCounterValue(4)
        } else if (incValue === 4) {
            setCounterValue(5)
        }
    }

    const resetCounterValue = () => {
        setCounterValue(0)
    }

    return (
        <div className={s.App}>
            <div className={s.Counter}><Counter
                counterValue={counterValue}
                increaseCounterValue={increaseCounterValue}
                resetCounterValue={resetCounterValue}
            /></div>


        </div>
    );
}

export default App;
