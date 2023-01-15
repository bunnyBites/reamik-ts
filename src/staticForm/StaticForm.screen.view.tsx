import { FieldBuilder } from "../_shared/components/fieldBuilder/FieldBuilder.component";
import { staticFormFieldOptions } from "../_shared/constants/staticForm/StaticForm.const";

export const StaticFormScreenView: React.FC = () => {
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
