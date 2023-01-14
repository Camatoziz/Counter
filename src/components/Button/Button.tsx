import React, {FC} from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void

    disabled: boolean
}

export const Button: FC<ButtonPropsType> = (props) => {
    return (
        <div>
            <button disabled={props.disabled} onClick={props.callback}>{props.name}</button>
        </div>
    );
};

