import { Formik } from "formik";
import { initialDynamicFormFields } from "../_shared/constants/dynamicForm/DynamicForm.const";
import { DyanamicFormView } from "./DynamicForm.component.view";

export const DyanamicForm: React.FC = () => (
    <Formik onSubmit={() => {}} initialValues={initialDynamicFormFields}>
        <DyanamicFormView />
    </Formik>
);
