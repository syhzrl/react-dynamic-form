import React, { FunctionComponent } from 'react';

import Input from '../Input';

import { IDynamicInput } from '../../types/DynamicInput';

import './DynamicForm.css';

export interface DynamicFormProps {
    data: IDynamicInput[];
    wrapperClassname?: string;
}

const DynamicForm: FunctionComponent<DynamicFormProps> = (props: DynamicFormProps) => {
    const { data, wrapperClassname } = props;

    return (
        <div className={wrapperClassname || 'dynamicFormWrapper'}>
            {data.map(item => {
                const {
                    id,
                    label,
                    type,
                    value,
                    onChangeHandler,
                    errorText,
                    validator,
                } = item;

                return (
                    <Input
                        key={id}
                        label={label}
                        type={type}
                        value={value}
                        onChange={onChangeHandler}
                        errorText={errorText}
                        validator={validator}
                    />
                );
            })}
        </div>
    );
};

DynamicForm.defaultProps = {
    wrapperClassname: '',
};

export default DynamicForm;
