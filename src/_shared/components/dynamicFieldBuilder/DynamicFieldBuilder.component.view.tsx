import { ErrorMessage, FieldArray, FieldArrayRenderProps, Form, useFormikContext } from "formik";
import { DynamicFieldBuilderOptionType } from "../../../_data/model/DynamicFieldBuilder.model";
import { FieldBuilderOptionsType, FieldInputType } from "../../../_data/model/FieldBuilder.model";
import { Select } from "../fieldBuilder/fieldInputType/Select.component.view";
import { Text } from "../fieldBuilder/fieldInputType/Text.component.view";

type DynamicFieldBuilderViewPropType = {
    rootFieldName: string;
    fieldOptions: DynamicFieldBuilderOptionType[];
}

export const DynamicFieldBuilderView: React.FC<DynamicFieldBuilderViewPropType> = (
    props: DynamicFieldBuilderViewPropType,
) => {
    const { rootFieldName, fieldOptions } = props;
    const { values } = useFormikContext<any>();

    const renderFieldInput = (preparedFieldOptions: FieldBuilderOptionsType) => {
        const InputComponent = (
            preparedFieldOptions.fieldInputType === FieldInputType.text
            ? Text : Select
        );

        return <InputComponent fieldOptions={{ ...preparedFieldOptions }} />;
    }

    const renderField = (arrayHelpers: FieldArrayRenderProps) => (
        <div className="d-flex flex-column">
            {
                values?.[rootFieldName]?.map((field: any, parentIndex: number) => {

                    return (
                        <div key={String(parentIndex)} className="d-flex justify-content-around">
                            {
                                fieldOptions.map((fieldOption, index) => {
                                const { fieldName, label } = fieldOption;

                                const preparedFieldName = `${rootFieldName}[${parentIndex}].${fieldName}`;

                                return (
                                    <div key={String(index)}>
                                        <label className="form-label fs-6 fw-bold">{label}</label>
                                        {
                                            renderFieldInput({
                                                ...fieldOptions[index],
                                                id: preparedFieldName,
                                                fieldName: preparedFieldName,
                                            })
                                        }
                                        <ErrorMessage name={preparedFieldName} />
                                    </div>
                                )})
                            }
                        </div>
                    )})
                }
        </div>
    )

    return (
        <Form className="py-2">
            <FieldArray
                name={rootFieldName}
                render={renderField}
            />
        </Form>
    )
};
