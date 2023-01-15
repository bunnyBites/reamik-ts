import { FieldBuilderOptionsType } from "../../../_data/model/FieldBuilder.model";
import { FieldBuilderView } from "./FieldBuilder.component.view"

type FieldBuilderPropsType = { fieldOptions: FieldBuilderOptionsType; }

export const FieldBuilder: React.FC<FieldBuilderPropsType> = (
    props: FieldBuilderPropsType
) => {
    return <FieldBuilderView {...props} />
}