import clsx from "clsx";
import { Link } from "react-router-dom";
import { sideBarOptions } from "../../constants/sideBar/SideBar.const";

type SidebarViewPropsType = { pathName: string }

export const SideBarView: React.FC<SidebarViewPropsType> = (props: SidebarViewPropsType) => {
    const { pathName } = props;

    return (
        <div className="min-vh-100 bg-dark py-3">
            <h4 className="text-white px-5 text-nowrap text-center mb-4">Reamik</h4>
            <ul className="nav flex-column nav-pills nav-fill">
                {
                    sideBarOptions.map(({ id, title, toPath }) => (
                        <li className="nav-item" key={id}>
                            <Link
                                to={toPath}
                                className={clsx("nav-link text-nowrap rounded-0", {
                                    "active": (toPath === pathName)
                                })}
                            >
                                {title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};
