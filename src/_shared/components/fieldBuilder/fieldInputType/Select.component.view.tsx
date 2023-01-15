import { Field } from "formik";
import { FieldBuilderOptionsType } from "../../../../_data/model/FieldBuilder.model";

type SelectInputProps = { fieldOptions: FieldBuilderOptionsType; }

export const Select: React.FC<SelectInputProps> = (
    props: SelectInputProps,
) => {
    const { fieldOptions } = props;

    return (
        <Field className="form-select" id={fieldOptions.id} name={fieldOptions.fieldName} as="select">
            {
                fieldOptions.options?.map((fieldOption) => (
                    <option key={fieldOption.id} value={fieldOption.value}>{fieldOption.label}</option>
                ))
            }
        </Field>
    )
}