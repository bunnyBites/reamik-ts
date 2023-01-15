import { Navbar } from "react-bootstrap";
import { SideBar } from "../sideBar/SideBar.component";

type AppBarViewPropsVO = { children: React.ReactNode }

export const AppBarView: React.FC<AppBarViewPropsVO> = (
  props: AppBarViewPropsVO,
) => {

  return (
    <div className="container-fluid ps-0">
      <div className="row gx-2">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-10">
          {props.children}
        </div>
    </div>
    </div>
  );
}
