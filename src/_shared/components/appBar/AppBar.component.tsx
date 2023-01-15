import { AppBarView } from "./AppBar.component.view";

type AppBarTypeVO = { children: React.ReactNode }

export const AppBar: React.FC<AppBarTypeVO> = (props: AppBarTypeVO) => <AppBarView { ...props} />;
