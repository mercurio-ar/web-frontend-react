import * as React from 'react';


export interface ITextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

export default function TextInput(props: ITextInputProps) {
    return (
        <input className="form-control form-control-dark w-100" type="text" {...props} />
    );
}
