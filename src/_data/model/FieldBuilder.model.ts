export enum FieldInputType {
    text = "fieldInputTypeText",
    select = "fieldInputTypeSelectDropdown"
}

export type SelectFieldOptionsType = {
    id: string;
    label: string;
    value: string;
}

export type FieldBuilderOptionsType = {
    fieldInputType: FieldInputType;
    id: string;
    fieldName: string;
    placeholder?: string;
    label: string;
    options?: SelectFieldOptionsType[];
}