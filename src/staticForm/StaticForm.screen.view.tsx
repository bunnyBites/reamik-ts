import { useFormikContext } from "formik";
import { StaticFormType } from "../_data/model/staticForm/StaticForm.model";
import { FieldBuilder } from "../_shared/components/fieldBuilder/FieldBuilder.component";
import { staticFormFieldOptions } from "../_shared/constants/staticForm/StaticForm.const";

export const StaticFormScreenView: React.FC = () => {
  // you can get form information using the useFormikContext hook
  const { values } = useFormikContext<StaticFormType>();
  console.log(values);

  return (
    <div className="my-4">
      {
        staticFormFieldOptions.map((fieldOption) => (
          <span className="py-2" key={fieldOption.id}>
            <FieldBuilder fieldOptions={{ ...fieldOption }} />
          </span>
        ))
      }
    </div>
)};
