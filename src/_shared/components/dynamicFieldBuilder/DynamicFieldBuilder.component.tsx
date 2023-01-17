import { DynamicFieldBuilderOptionType } from "../../../_data/model/DynamicFieldBuilder.model";
import { DynamicFieldBuilderView } from "./DynamicFieldBuilder.component.view";

type DynamicFieldBuilderPropType = {
    rootFieldName: string;
    fieldOptions: DynamicFieldBuilderOptionType[];
}

export const DynamicFieldBuilder: React.FC<DynamicFieldBuilderPropType> = (
    props: DynamicFieldBuilderPropType,
) => <DynamicFieldBuilderView {...props} />;
