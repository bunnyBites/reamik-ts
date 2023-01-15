export enum FieldInputType {
    text = "fieldInputTypeText",
    select = "fieldInputTypeSelectDropdown"
}


export type FieldBuilderOptionsType = {
    fieldInputType: FieldInputType;
    id: string;
    fieldName: string;
    placeholder: string;
    label: string;
}