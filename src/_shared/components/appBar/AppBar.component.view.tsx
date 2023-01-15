import { Navbar } from "react-bootstrap";
import { SideBar } from "../sideBar/SideBar.component";

type AppBarViewPropsVO = { children: React.ReactNode }

export const AppBarView: React.FC<AppBarViewPropsVO> = (
  props: AppBarViewPropsVO,
) => {

  return (
    <div className="d-flex" style={{ overflowX: "hidden" }}>
      <SideBar />
      <div className="min-vw-100">
        <Navbar bg="dark" variant="dark" expand="xl">
          <div className="container-fluid">
            <Navbar.Brand>
              <img
                src="/vite.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              Reamik
            </Navbar.Brand>
          </div>
        </Navbar>
        <div className="px-4 w-75">
          {props.children}
        </div>
      </div>
    </div>
  );
}
