import { useLocation } from "react-router-dom";
import { SideBarView } from "./SideBar.component.view";

export const SideBar: React.FC = () => {
    const { pathname } = useLocation();

    return <SideBarView pathName={pathname} />;
}
