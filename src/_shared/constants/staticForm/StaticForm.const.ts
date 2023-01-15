import { FieldBuilderOptionsType, FieldInputType } from "../../../_data/model/FieldBuilder.model";

export const staticFormFieldOptions: FieldBuilderOptionsType[] = [
    {
        fieldInputType: FieldInputType.text,
        fieldName: "firstName",
        id: "staticFormFirstName",
        label: "First Name",
        placeholder: "Harry"
    },
    {
        fieldInputType: FieldInputType.text,
        fieldName: "lastName",
        id: "staticFormLastName",
        label: "Last Name",
        placeholder: "Potter"
    },
]