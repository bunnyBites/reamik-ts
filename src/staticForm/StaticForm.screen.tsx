import { Formik } from 'formik';
import { initialStaticFormFieldValue } from '../_shared/constants/staticForm/StaticForm.const';
import { StaticFormScreenView } from './StaticForm.screen.view';

export const StaticFormScreen: React.FC = () => (
    <Formik initialValues={initialStaticFormFieldValue} onSubmit={() => {}}>
        <StaticFormScreenView />
    </Formik>
);
