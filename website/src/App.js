import "./App.css";
import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import {
  Container,
  Menu,
  Visibility,
  Sidebar,
  Segment
} from "semantic-ui-react";
import Footer from "./Pages/Footer";
import Skills from "./Pages/Literature";
import Vision from "./Pages/Vision";
import Interest from "./Pages/Interest";
import Head from "./Heading/Head";
import Projects from "./Pages/Projects";
import HeadMobile from "./Heading/HeadMobile";
import { FaLanguage } from "react-icons/fa";
import Analysis from "./Pages/Analysis";
import { Route, NavLink, HashRouter, Redirect } from "react-router-dom";
import Literature from "./Pages/Literature";
import Trends from "./Pages/Trends";
class App extends Component {
  constructor(props) {
    super(props);
    this.visionRef = React.createRef();
    this.interestRef = React.createRef();
    this.skillsRef = React.createRef();
    this.projectsRef = React.createRef();
    this.analysisRef = React.createRef();
    this.state = {
      width: window.innerWidth,
      languageIsDutch: true
    };
  }
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  state = {};
  hideFixedMenu = () => this.setState({ fixed: false, active: true });
  showFixedMenu = () =>
    this.setState({ fixed: true, active: false, activeButton: "Vision" });
  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const DefaultRedirect = () => <Redirect to="/home" />;
    const { width } = this.state;
    const isMobile = width <= 500;
    const { fixed } = this.state;
    const Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;
    const { active } = this.state;

    if (isMobile) {
      return (
        <>
          <Segment
            textAlign="center"
            style={{ minHeight: 0, padding: "0em 0em" }}
            vertical
          >
            <HeadMobile
              setLanguage={() =>
                this.setState({
                  languageIsDutch: !this.state.languageIsDutch
                })
              }
            />
          </Segment>

          <Vision
            padding="5em 0em"
            ref={section => {
              this.visionRef = section;
            }}
          />
          <Trends
            padding="5em 0em"
            ref={section => {
              this.visionRef = section;
            }}
          />
          <Interest
            padding="5em 0em"
            ref={section => {
              this.interestRef = section;
            }}
          />
          <Analysis
            padding="5em 0em"
            ref={section => {
              this.analysisRef = section;
            }}
          />
          <Projects
            isMobile={this.isMobile}
            padding="5em 0em"
            ref={section => {
              this.projectsRef = section;
            }}
          />
          <Skills
            padding="5em 0em"
            columns={1}
            ref={section => {
              this.skillsRef = section;
            }}
          />
          <Footer padding="5em 0em" />
        </>
      );
    } else {
      return (
        <>
          <HashRouter>
            >
            <Menu
              fixed={fixed ? "top" : "top"}
              // inverted={fixed ? !fixed : !fixed}
              secondary={fixed ? !fixed : !fixed}
              borderless
              size="huge"
              id="menu"
            >
              <div>
                <h1 id="title">Leven Lang Leren</h1>
                <h6 id="subtitle">Beau Vlok (0939632)</h6>
              </div>
              <Container>
                <Menu.Item position="right">
                  <Menu.Item as="a" active={active}>
                    <NavLink to="/home">Home</NavLink>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <NavLink to="/visie">Visie</NavLink>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <NavLink to="/trends">Trends</NavLink>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <NavLink to="/belang">Belang</NavLink>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <NavLink to="/analyse">Analyse</NavLink>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <NavLink to="/activiteiten">Activiteiten</NavLink>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <NavLink to="/literatuur">Literatuur</NavLink>
                  </Menu.Item>
                </Menu.Item>
              </Container>
            </Menu>
            <div style={{ paddingTop: "10em", paddingBottom: "8em" }} className="content">
              <Route exact path="/" component={DefaultRedirect} />
              <Route path={process.env.PUBLIC_URL + "/home"} component={Head} />
              <Route
                path={process.env.PUBLIC_URL + "/visie"}
                component={Vision}
              />
              <Route path="/trends" component={Trends} />
              <Route path="/belang" component={Interest} />
              <Route path="/analyse" component={Analysis} />
              <Route path="/activiteiten" component={Projects} />
              <Route path="/literatuur" component={Literature} />
            </div>
          </HashRouter>
        </>
      );
    }
  }
}
export default App;
