import React, {FC, useEffect, useState} from 'react';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

type SettingsPropsType = {
    inputMaxValue: number
    inputStartValue: number

    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
    setLocalValue: () => void
}


export const Settings: FC<SettingsPropsType> = (props) => {



    const disabling = props.inputStartValue < 0 ? true : props.inputMaxValue <= props.inputStartValue

    return (
        <div>
            <div>
                <span>MaxValue</span>
                <Input  value={props.inputMaxValue} inputCallback={props.setMaxValue}/>
            </div>
            <div>
                <span>StartValue</span>
                <Input value={props.inputStartValue} inputCallback={props.setStartValue}/>
            </div>
            <Button name={"set"} callback={props.setLocalValue} disabled={disabling}/>
        </div>
    );
};

