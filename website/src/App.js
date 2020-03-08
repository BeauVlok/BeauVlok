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
import { FaArrowDown, FaLanguage } from "react-icons/fa";
import Analysis from "./Pages/Analysis";

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
      languageIsDutch: true,
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
  hideFixedMenu = () => this.setState({ fixed: false, active: true});
  showFixedMenu = () => this.setState({ fixed: true , active: false, activeButton:"Vision"});
  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    const { fixed } = this.state;
    const Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;
    const { sidebarOpened } = this.state;
    const {active} = this.state;
    //const{activeButton} = this.state;
    if (isMobile) {
      return (
        < >
          <Visibility
          style={{ overflowY: 'hidden', overflowX: 'hidden'}}
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            {/* <Menu
              as={Menu}
              animation="push"
              inverted
              onHide={this.handleSidebarHide}
              size="medium"
              visible={sidebarOpened}
              fixed={fixed ? "top" : "top"}
            >
              <Menu.Item
                as="a"
                onClick={() =>
                  scrollToComponent(this.visionRef) && this.handleSidebarHide()
                }
              >
                Vision
              </Menu.Item>
              <Menu.Item
                as="a"
                onClick={() =>
                  scrollToComponent(this.interestRef) &&
                  this.handleSidebarHide()
                }
              >
                Interest
              </Menu.Item>
              <Menu.Item
                as="a"
                onClick={() =>
                  scrollToComponent(this.projectsRef) &&
                  this.handleSidebarHide()
                }
              >
                Projects
              </Menu.Item>
              <Menu.Item
                as="a"
                onClick={() =>
                  scrollToComponent(this.skillsRef) && this.handleSidebarHide()
                }
              >
                Skills
              </Menu.Item>
            </Menu> */}
            <Sidebar.Pusher dimmed={sidebarOpened}>
              <Segment
                inverted
                textAlign="center"
                style={{ minHeight: 0, padding: "0em 0em"}}
                vertical
              >
                {/* <Container style={{ minHeight: 40, padding: "0em 0em" }} /> */}
                <HeadMobile  setLanguage= {() => this.setState({languageIsDutch :!this.state.languageIsDutch})}/>
              </Segment>

              <Vision
              language= {this.state.languageIsDutch}
              padding='5em 0em'
                ref={section => {
                  this.visionRef = section;
                }}
              />
              <Interest
               language= {this.state.languageIsDutch}
              padding='5em 0em'
                ref={section => {
                  this.interestRef = section;
                }}
              />
                            <Analysis
                             language= {this.state.languageIsDutch}
              padding='5em 0em'
                ref={section => {
                  this.analysisRef = section;
                }}
              />
              <Projects
              isMobile= {this.isMobile}
               language= {this.state.languageIsDutch}
              padding='5em 0em'
                ref={section => {
                  this.projectsRef = section;
                }}
              />
              <Skills
               language= {this.state.languageIsDutch}
              padding='5em 0em'
              columns={1}
                ref={section => {
                  this.skillsRef = section;
                }}
              />
              <Footer
               language= {this.state.languageIsDutch}
              padding='5em 0em'/>
            </Sidebar.Pusher>
          </Visibility>
        </>
      );
    } else {
      return (
        <>
          {" "}
          <Head />
          <FaArrowDown
            id="Arrow"
            size="2.5em"
            as="a"
            onClick={() => scrollToComponent(this.visionRef)}
          />
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
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
                  <Menu.Item as="a" active={active} onClick={() => scroll.scrollTo(0)}>
                   Home
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.visionRef)}
                  >
                    {this.state.languageIsDutch ? "Persoonlijke visie" : "Personal vision"}
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.interestRef)}
                  >
                   {this.state.languageIsDutch ? "Belang" : "Interest"}
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.analysisRef)}
                  >
                    {this.state.languageIsDutch ? "Analyse" : "Analysis"}
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.projectsRef)}
                  >
                    {this.state.languageIsDutch ? "Activiteiten" : "Activities"}
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.skillsRef)}
                  >
                    {this.state.languageIsDutch ? "Literatuur" : "Literature"}
                  </Menu.Item>
                  <Menu.Item
                    
                    onClick={() => this.setState({languageIsDutch: !this.state.languageIsDutch})}
                  >
                    <FaLanguage id="language" size = '1.5em'/>
                  </Menu.Item>
                </Menu.Item>
              </Container>
            </Menu>
          </Visibility>
          <Vision
          language= {this.state.languageIsDutch}
          padding='20em 0em'
            ref={section => {
              this.visionRef = section;
            }}
          />
          <Interest
          language= {this.state.languageIsDutch}
           padding='20em 0em'
            ref={section => {
              this.interestRef = section;
            }}
          />
            <Analysis
            language= {this.state.languageIsDutch}
           padding='20em 0em'
            ref={section => {
              this.analysisRef = section;
            }}
          />
          <Projects
                        isMobile= {this.isMobile}
          language= {this.state.languageIsDutch}
           padding='20em 0em'
           display="none"
            ref={section => {
              this.projectsRef = section;
            }}
          />
          <Skills
           language= {this.state.languageIsDutch}
           padding='20em 0em'
           columns={2}
            ref={section => {
              this.skillsRef = section;
            }}
          />
          <Footer
          language= {this.state.languageIsDutch}
          padding='5em 0em' />
        </>
      );
    }
  }
}
export default App;
