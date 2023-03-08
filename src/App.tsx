import React, {useEffect, useState} from 'react';
// import s from './App.module.css'
// import {Counter} from "./Components/Counter";
// import {Settings} from "./Components/Settings";
//
// export type CounterValueType = number | string
//
// function App() {
//
//     const [startValue, setStartValue] = useState(0)
//     const [counterValue, setCounterValue] = useState<CounterValueType>(startValue)
//     const [maxValue, setMaxValue] = useState(5)
//     const [error, setError] = useState(false)
//
//     const setSettingsStartValue = (value: number) => {
//         value >= maxValue || value < 0 ? setError(true) : setError(false)
//         setStartValue(value)
//         setCounterValue("enter values and press 'set' ")
//     }
//
//     const setSettingsMaxValue = (value: number) => {
//         value <= startValue || value <= 0 ? setError(true) : setError(false)
//         setMaxValue(value)
//         setCounterValue("enter values and press 'set' ")
//     }
//
//     const setSettingsCounterValue = () => {
//         setCounterValue(startValue)
//     }
//
//
//
//     const increaseCounterValue = (incValue: number) => {
//         return incValue >= startValue && incValue <= maxValue ? setCounterValue(incValue + 1) : counterValue
//
//     }
//
//     const resetCounterValue = () => {
//         setCounterValue(startValue)
//     }
//
//     // useEffect(() => {
//     //     let valueAsString = localStorage.getItem('startValue')
//     //     if (valueAsString) {
//     //         let newValue = JSON.parse(valueAsString)
//     //         setStartValue(newValue)
//     //         setCounterValue(newValue)
//     //     }
//     // }, [])
//     //
//     // useEffect(() => {
//     //     localStorage.setItem('startValue', JSON.stringify(startValue))
//     // }, [startValue])
//     //
//     // useEffect(() => {
//     //     let valueAsString = localStorage.getItem('maxValue')
//     //     if (valueAsString) {
//     //         let newValue = JSON.parse(valueAsString)
//     //         setMaxValue(newValue)
//     //     }
//     // }, [])
//     //
//     // useEffect(() => {
//     //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
//     // }, [maxValue])
//
//     return (
//         <div className={s.App}>
//             <div className={s.Settings}>
//                 <Settings setSettingsMaxValue={setSettingsMaxValue} setSettingsStartValue={setSettingsStartValue}
//                           startValue={startValue} maxValue={maxValue} counterValue={counterValue}
//                           setSettingsCounterValue={setSettingsCounterValue}
//                           error={error}
//                           // setCounterValue={setCounterValue}
//                 />
//             </div>
//             <div className={s.Counter}><Counter
//                 counterValue={counterValue}
//                 increaseCounterValue={increaseCounterValue}
//                 resetCounterValue={resetCounterValue}
//                 startValue={startValue}
//                 maxValue={maxValue}
//                 error={error}
//             /></div>
//         </div>
//     );
// }
//
// export default App;
