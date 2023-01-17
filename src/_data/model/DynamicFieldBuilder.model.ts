import { FieldBuilderOptionsType } from "./FieldBuilder.model";

// creating a type used for static form by omiting the id field (since id cannot be managed for dynamic fields)
export type DynamicFieldBuilderOptionType = Omit<FieldBuilderOptionsType, "id">;

export type DynamicFormStudentType = {
    name: string;
    age: string;
    hobby: string;
}

export type DynamicFormType = {  students: DynamicFormStudentType[] };
