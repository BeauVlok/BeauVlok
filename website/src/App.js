import "./App.css";
import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import {
  Container,
  Menu,
Dropdown,
Image,
MenuItem
} from "semantic-ui-react";
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
    console.log(this.state.width)
      return (
        <>
          <HashRouter>
            >
            {this.state.width < 600 ? 
               <Menu  id="menu" fixed='top' inverted>
               <Container>
                 <MenuItem as='a' header>
                   Lang leven leren
                 </MenuItem>
                 <MenuItem as='a'>Home</MenuItem>
         
                 <Dropdown item simple text='Dropdown'>
                   <Dropdown.Menu>
                     <Dropdown.Item>List Item</Dropdown.Item>
                     <Dropdown.Item>List Item</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Header>Header Item</Dropdown.Header>
                     <Dropdown.Item>
                       <i className='dropdown icon' />
                       <span className='text'>Submenu</span>
                       <Dropdown.Menu>
                         <Dropdown.Item>List Item</Dropdown.Item>
                         <Dropdown.Item>List Item</Dropdown.Item>
                       </Dropdown.Menu>
                     </Dropdown.Item>
                     <Dropdown.Item>List Item</Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
               </Container>
             </Menu>
             :
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
                  <MenuItem active={active}>
                    <NavLink to="/home">Home</NavLink>
                  </MenuItem>
                  <MenuItem >
                    <NavLink to="/visie">Visie</NavLink>
                  </MenuItem>
                  <MenuItem >
                    <NavLink to="/trends">Trends</NavLink>
                  </MenuItem>
                  <MenuItem >
                    <NavLink to="/belang">Belang</NavLink>
                  </MenuItem>
                  <MenuItem >
                    <NavLink to="/analyse">Analyse</NavLink>
                  </MenuItem>
                  <MenuItem >
                    <NavLink to="/activiteiten">Activiteiten</NavLink>
                  </MenuItem>
                  <MenuItem >
                    <NavLink to="/literatuur">Literatuur</NavLink>
                  </MenuItem>
                </MenuItem>
              </Container>
            </Menu>
  }
            <div className="content">
              <Route exact path="/" component={DefaultRedirect} />
              <Route path={process.env.PUBLIC_URL + "/home"} component= {this.state.width < 600 ? HeadMobile : Head}/>
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
