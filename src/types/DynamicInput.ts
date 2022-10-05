export interface IDynamicInput {
    id: string;
    type: string;
    label: string;
    value: string;
    onChangeHandler: (value: string) => void;
    errorText: string;
    validator: (params?: any) => boolean;
}