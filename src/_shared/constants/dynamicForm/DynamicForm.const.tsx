import { DynamicFieldBuilderOptionType, DynamicFormType } from "../../../_data/model/DynamicFieldBuilder.model";
import { FieldInputType } from "../../../_data/model/FieldBuilder.model";

export const initialDynamicFormFields: DynamicFormType = {
    students: [
        {
            name: "Mukesh",
            age: "25",
            hobby: "Chess"
        },
        {
            name: "Bunny",
            age: "22",
            hobby: "Tweeting"
        },
        {
            name: "Max",
            age: "23",
            hobby: "Gaming"
        }
    ]
}

export const dynamicFormStudentsFieldOptions: DynamicFieldBuilderOptionType[] = [
    {
        fieldInputType: FieldInputType.text,
        fieldName: "name",
        label: "Name",
        placeholder: "Jane",
    },
    {
        fieldInputType: FieldInputType.text,
        fieldName: "age",
        label: "Age",
        placeholder: "18",
    },
    {
        fieldInputType: FieldInputType.text,
        fieldName: "hobby",
        label: "Hobbies",
    }
]