import { DynamicFieldBuilder } from "../_shared/components/dynamicFieldBuilder/DynamicFieldBuilder.component";
import { dynamicFormStudentsFieldOptions } from "../_shared/constants/dynamicForm/DynamicForm.const";

export const DyanamicFormView: React.FC = () => (
    <DynamicFieldBuilder
        rootFieldName="students"
        fieldOptions={[...dynamicFormStudentsFieldOptions]}
    />
);
