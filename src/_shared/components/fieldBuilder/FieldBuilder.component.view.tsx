import { ErrorMessage } from "formik";
import { FieldBuilderOptionsType, FieldInputType } from "../../_data/model/FieldBuilder.model";
import { Text } from "./fieldInputType/Text.component.view";
import { Select } from "./fieldInputType/Select.component.view";

type FieldBuilderViewPropsType = { fieldOptions: FieldBuilderOptionsType; }

export const FieldBuilderView: React.FC<FieldBuilderViewPropsType> = (
    props: FieldBuilderViewPropsType,
) => {
    const { fieldOptions } = props;

    // have seperated this code as it may expand in future with more field types.
    const renderFieldInput = () => {
        const InputComponent = (fieldOptions.fieldInputType === FieldInputType.text ? Text : Select);

        return <InputComponent {...props} />
    }

    return (
        <div className="mb-3">
             {/* field label */}
            <label htmlFor={fieldOptions.id} className="form-label">{fieldOptions.label}</label>

            {/*  field input */}
            {renderFieldInput()}

            {/* field error */}
            <ErrorMessage name={fieldOptions.fieldName} />
        </div>
    )
}