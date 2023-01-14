import { Navbar } from "react-bootstrap";

type AppBarViewPropsVO = { children: React.ReactNode }

export const AppBarView: React.FC<AppBarViewPropsVO> = (
  props: AppBarViewPropsVO,
) => (
  <div>
    <Navbar bg="dark" expand="lg">
      <div className="container">
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
      </div>
    </Navbar>
    {props.children}
  </div>
)
