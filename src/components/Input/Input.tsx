import React, {ChangeEvent, FC} from 'react';

type InputPropsType = {
    inputCallback: (inputValue: number)=>void
    value: number
}

export const Input: FC<InputPropsType> = (props) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        props.inputCallback(Number(e.currentTarget.value))
    }
    return (
        <span>
            <input value={props.value} type={'number'} onChange={onChangeInputHandler}/>
        </span>
    );
};

