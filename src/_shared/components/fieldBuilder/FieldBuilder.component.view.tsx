import { ErrorMessage } from "formik";
import { Text } from "./fieldInputType/Text.component.view";
import { Select } from "./fieldInputType/Select.component.view";
import { FieldBuilderOptionsType, FieldInputType } from "../../../_data/model/FieldBuilder.model";

type FieldBuilderViewPropsType = { fieldOptions: FieldBuilderOptionsType; }

export const FieldBuilderView: React.FC<FieldBuilderViewPropsType> = (
    props: FieldBuilderViewPropsType,
) => {
    const { fieldOptions } = props;

    // have seperated this code as it may expand in future with more field types.
    const renderFieldInput = () => {
        const InputComponent = (
            fieldOptions.fieldInputType === FieldInputType.text
            ? Text : Select
        );

        return <InputComponent {...props} />
    }

    return (
        <div className="mb-3">
             {/* field label */}
            <label
                htmlFor={fieldOptions.id}
                className="form-label fs-6 fw-bold"
            >
                {fieldOptions.label}
            </label>

            {/*  field input */}
            {renderFieldInput()}

            {/* field error */}
            <ErrorMessage name={fieldOptions.fieldName} />
        </div>
    )
}