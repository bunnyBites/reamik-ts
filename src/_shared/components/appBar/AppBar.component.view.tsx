import { Navbar } from "react-bootstrap";

type AppBarViewPropsVO = { children: React.ReactNode }

export const AppBarView: React.FC<AppBarViewPropsVO> = (
  props: AppBarViewPropsVO,
) => (
  <div>
    <Navbar bg="dark" variant="dark" expand="xl">
      <div className="container">
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
    {props.children}
  </div>
)
