import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Login = () => {
    return (
        <>
            <footer className="py-5">
                <Container>
                    <Row className="align-items-center justify-content-xl-between">
                        <Col xl="6">
                            <div className="copyright text-center text-xl-left text-muted">
                                © {new Date().getFullYear()}{" "}
                                <a
                                    className="font-weight-bold ml-1"
                                    href="https://www.creative-tim.com?ref=adr-auth-footer"
                                    target="_blank"
                                >
                                    Creative Tim
                                </a>
                            </div>
                        </Col>
                        <Col xl="6">
                            <Nav className="nav-footer justify-content-center justify-content-xl-end">
                                <NavItem>
                                    <NavLink
                                        href="https://www.creative-tim.com?ref=adr-auth-footer"
                                        target="_blank"
                                    >
                                        Creative Tim
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="https://www.creative-tim.com/presentation?ref=adr-auth-footer"
                                        target="_blank"
                                    >
                                        About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="http://blog.creative-tim.com?ref=adr-auth-footer"
                                        target="_blank"
                                    >
                                        Blog
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-auth-footer"
                                        target="_blank"
                                    >
                                        MIT License
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Login;