import "./App.css";
import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import { Container, Menu, Dropdown, Image, MenuItem,Sidebar, Icon } from "semantic-ui-react";
import Vision from "./Pages/Vision";
import Interest from "./Pages/Interest";
import Head from "./Heading/Head";
import Projects from "./Pages/Projects";
import HeadMobile from "./Heading/HeadMobile";
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
    const { fixed } = this.state;
    const Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;
    const { active } = this.state;
    const { children } = this.props
    const { sidebarOpened } = this.state
    console.log(this.state.width);
    return (
      <>
        <HashRouter>
          
          {this.state.width < 600 ? (
            <>
                        <Container id="header">
              <Icon size="large" name="bars" onClick={this.handleToggle} / >
              <div className="title">Leven Lang leren</div>
            </Container>
            <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            id="menu"
          >
           
              <Container>
                <Container className="sideTitle">
                <h2>Leven Lang Leren</h2>
                <h4>Beau Vlok</h4>
                </Container>
              <MenuItem position="right">
              <NavLink to="/home"><MenuItem active={active}>
                   Home
                  </MenuItem></NavLink>
                  <NavLink to="/visie"><MenuItem>
                  Visie
                  </MenuItem></NavLink>
                  <NavLink to="/trends"><MenuItem>
                  Trends
                  </MenuItem></NavLink>
                  <NavLink to="/belang"><MenuItem>
                  Belang
                  </MenuItem></NavLink>
                  <NavLink to="/analyse"><MenuItem>
                  Analyse
                  </MenuItem></NavLink>
                  <NavLink to="/activiteiten"><MenuItem>
                  Activiteiten
                  </MenuItem></NavLink>
                  <NavLink to="/literatuur"><MenuItem>
                  Literatuur
                  </MenuItem></NavLink>
                </MenuItem>
              </Container>
            </Sidebar>
            </>
          ) : (
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
                <MenuItem position="right">
                <NavLink to="/home"><MenuItem active={active}>
                   Home
                  </MenuItem></NavLink>
                  <NavLink to="/visie"><MenuItem>
                  Visie
                  </MenuItem></NavLink>
                  <NavLink to="/trends"><MenuItem>
                  Trends
                  </MenuItem></NavLink>
                  <NavLink to="/belang"><MenuItem>
                  Belang
                  </MenuItem></NavLink>
                  <NavLink to="/analyse"><MenuItem>
                  Analyse
                  </MenuItem></NavLink>
                  <NavLink to="/activiteiten"><MenuItem>
                  Activiteiten
                  </MenuItem></NavLink>
                  <NavLink to="/literatuur"><MenuItem>
                  Literatuur
                  </MenuItem></NavLink>
                </MenuItem>
          
              </Container>
            </Menu>
          )}
          <div className="content">
            <Route exact path="/" component={DefaultRedirect} />
            <Route
              path={process.env.PUBLIC_URL + "/home"}
              component={this.state.width < 600 ? HeadMobile : Head}
            />
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
  //}
}
export default App;
