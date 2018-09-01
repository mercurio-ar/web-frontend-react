import * as React from 'react';


export interface ITextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

export function TextInput(props: ITextInputProps) {
    return (
        <input  
        type="text" {...props} />
    );
}
