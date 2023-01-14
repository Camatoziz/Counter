import React, {FC, useState} from 'react';
import {Display} from "../Display/Display";
import {Button} from "../Button/Button";

type CounterPropsType = {
    value: number
    maxValue: number
    startValue: number
    displayValue: DisplayValueType

    incValueHandler: ()=>void
    resetValue: ()=>void
}
export type DisplayValueType = 'counter'|'error'|'setting'

export const Counter: FC<CounterPropsType> = (props) => {


    return (
        <div>
            <Display displayValue={props.displayValue} value={props.value}/>
            <Button disabled={props.value===props.maxValue} callback={props.incValueHandler} name={"inc"}/>
            <Button disabled={props.value===0} callback={props.resetValue} name={"reset"}/>
        </div>
    );
};

