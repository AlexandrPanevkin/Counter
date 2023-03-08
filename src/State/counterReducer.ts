import {stateType} from "../AppRed";

const initialState: stateType = {
    startValue: 0,
    counterValue: 0,
    maxValue: 5,
    error: false
}

export const counterReducer = (state = initialState, action: counterReducerType): stateType => {
    switch (action.type) {

        case "SET-SETTINGS-START-VALUE": {
            return {...state, startValue: action.value, counterValue: "enter values and press 'set' "}
        }
        case "SET-SETTINGS-MAX-VALUE": {
            return {...state, maxValue: action.value, counterValue: "enter values and press 'set' "}
        }
        case "INCREASE-COUNTER-VALUE": {
            return {...state, counterValue: action.incValue + 1}
        }
        case "RESET-COUNTER-VALUE": {
            return {...state, counterValue: state.startValue}
        }
        case "SET-SETTINGS-COUNTER-VALUE": {
            return {...state, counterValue: state.startValue}
        }
        case "SET-ERROR": {
            if (state.startValue > state.maxValue || (state.startValue | state.maxValue) < 0 || state.counterValue >= state.maxValue) {
                return {...state, error: true}
            } else {
                return {...state, error: false}
            }
        }
        default: {
            return state
        }
    }
}

type counterReducerType =
    setSettingsStartValueACType
    | setSettingsMaxValueACType
    | increaseCounterValueACType
    | resetCounterValueACType
    | setSettingsCounterValueACType
    | setErrorACType

export type setSettingsStartValueACType = ReturnType<typeof setSettingsStartValueAC>
export const setSettingsStartValueAC = (value: number) => {
    return {type: 'SET-SETTINGS-START-VALUE', value} as const
}

export type setSettingsMaxValueACType = ReturnType<typeof setSettingsMaxValueAC>
export const setSettingsMaxValueAC = (value: number) => {
    return {type: 'SET-SETTINGS-MAX-VALUE', value} as const
}

export type increaseCounterValueACType = ReturnType<typeof increaseCounterValueAC>
export const increaseCounterValueAC = (incValue: number) => {
    return {type: 'INCREASE-COUNTER-VALUE', incValue} as const
}

export type resetCounterValueACType = ReturnType<typeof resetCounterValueAC>
export const resetCounterValueAC = () => {
    return {type: 'RESET-COUNTER-VALUE'} as const
}

export type setSettingsCounterValueACType = ReturnType<typeof setSettingsCounterValueAC>
export const setSettingsCounterValueAC = () => {
    return {type: 'SET-SETTINGS-COUNTER-VALUE'} as const
}

export type setErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = () => {
    return {type: 'SET-ERROR'} as const
}