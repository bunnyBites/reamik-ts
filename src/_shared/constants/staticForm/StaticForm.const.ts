import { FieldBuilderOptionsType, FieldInputType } from "../../../_data/model/FieldBuilder.model";
import { StaticFormType } from "../../../_data/model/staticForm/StaticForm.model";

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
    {
        fieldInputType: FieldInputType.select,
        fieldName: "role",
        id: "staticFormRole",
        label: "Role",
        options: [
            {
                id: "staticFormRoleOptionNone",
                label: "Select role",
                value: "",
            },
            {
                id: "staticFormRoleOptionDeveloper",
                label: "Developer",
                value: "dev",
            },
            {
                id: "staticFormRoleOptionStudent",
                label: "Student",
                value: "intern",
            },
        ]
    }
]

export const initialStaticFormFieldValue: StaticFormType = {
    firstName: "",
    lastName: "",
    role: "",
}
