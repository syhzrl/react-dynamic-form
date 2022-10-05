import { FunctionComponent } from 'react';

interface IDynamicInput {
    id: string;
    type: string;
    label: string;
    value: string;
    onChangeHandler: (value: string) => void;
    errorText: string;
    validator: (params?: any) => boolean;
}

interface DynamicFormProps {
    data: IDynamicInput[];
    wrapperClassname?: string;
}
declare const DynamicForm: FunctionComponent<DynamicFormProps>;

export { DynamicForm, IDynamicInput };
