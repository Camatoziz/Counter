import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter, DisplayValueType} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)
    const [value, setValue] = useState<number>(startValue)

    const [displayValue, setDisplayValue] = useState<DisplayValueType>("counter")

    useEffect(()=>localStorage.setItem('current value', JSON.stringify(value)),
        [value])

    useEffect(()=>getLocalMaxAndStartValue, [])

    const incValue = () => {
        setValue(value + 1)
    }

    const resetValue = () => {
        setValue(0)
        localStorage.removeItem('current value')
    }

    const setLocalMaxAndStartValue = ()=>{
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setValue(startValue)
        setDisplayValue('counter')

    }

    const getLocalMaxAndStartValue = () => {
        const getLocalMaxValue = localStorage.getItem('maxValue')
        const getLocalStartValue = localStorage.getItem('startValue')
        if(getLocalMaxValue!==null) setMaxValue(JSON.parse(getLocalMaxValue))
        if(getLocalStartValue!==null) {setStartValue(JSON.parse(getLocalStartValue))
            setValue(JSON.parse(getLocalStartValue))
    }
    }
const onChangeSetMaxValue = (maxValue: number) =>{
        setMaxValue(maxValue)
    maxValue<=startValue?setDisplayValue("error"):setDisplayValue('setting')
}
    const onChangeSetStartValue = (startValue: number) =>{
        setStartValue(startValue)
        startValue<0||startValue>=maxValue?setDisplayValue("error"):setDisplayValue('setting')
    }

    return (
        <div className="App">
            <Counter
                value={value}
                maxValue={maxValue}
                startValue={startValue}
                displayValue={displayValue}

                incValueHandler={incValue}
                resetValue={resetValue}/>
            <Settings
                setMaxValue={onChangeSetMaxValue}
                setStartValue={onChangeSetStartValue}
                setLocalValue={setLocalMaxAndStartValue}

                inputMaxValue={maxValue}
                inputStartValue={startValue}
            />
        </div>
    );
}

export default App;
