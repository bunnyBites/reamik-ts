import { Field } from "formik";
import { FieldBuilderOptionsType } from "../../../../_data/model/FieldBuilder.model";

type TextInputProps = { fieldOptions: FieldBuilderOptionsType; }

export const Text: React.FC<TextInputProps> = (
    props: TextInputProps,
) => {
    const { fieldOptions } = props;

    return (
        <Field
            type="text"
            placeholder={fieldOptions.placeholder}
            id={fieldOptions.id}
            className="form-control"
            name={fieldOptions.fieldName}
        />
    )
};
