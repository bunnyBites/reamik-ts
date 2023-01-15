import { Formik } from 'formik';
import { StaticFormScreenView } from './StaticForm.screen.view';

export const StaticFormScreen: React.FC = () => (
    <Formik initialValues={{}} onSubmit={() => {}}>
        <StaticFormScreenView />
    </Formik>
);
