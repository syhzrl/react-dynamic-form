import React, { FunctionComponent, useState, useEffect } from 'react';

import './Input.css';

interface InputProps {
    label: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    errorText: string;
    validator: (params?: any) => boolean;
    wrapperClassname?: string;
    labelClassname?: string;
    inputClassname?: string;
    errorClassname?: string;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    const {
        label,
        type,
        value,
        onChange,
        errorText,
        validator,
        wrapperClassname,
        labelClassname,
        inputClassname,
        errorClassname,
    } = props;

    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const validated = validator(value);

        if (validated) {
            setShowError(false);
        } else {
            setShowError(true);
        }
    }, [value]);

    return (
        <div className={wrapperClassname || 'inputWrapper'}>
            <div className={labelClassname || 'inputLabel'}>{label}</div>

            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={inputClassname || 'input'}
            />

            {showError && (
                <div className={errorClassname || 'inputError'}>
                    {errorText}
                </div>
            )}
        </div>
    );
};

Input.defaultProps = {
    wrapperClassname: '',
    labelClassname: '',
    inputClassname: '',
    errorClassname: '',
};

export default Input;
