import React, {FC} from 'react';
import {DisplayValueType} from "../Counter/Counter";

type DisplayPropsType = {
    value: number
    displayValue: DisplayValueType
}

export const Display: FC<DisplayPropsType> = ({displayValue, ...props}) => {
    const errorMessage = "Incorrect value!"
    const setMessage = "Press set key for count"
    return (
        <div>
            {displayValue==="counter"?props.value:displayValue==="error"?errorMessage:setMessage}

        </div>
    );
};

