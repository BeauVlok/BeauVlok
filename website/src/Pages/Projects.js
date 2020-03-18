import React from "react";
import { Grid, Segment, Image, Header, Divider } from "semantic-ui-react";
import webshop from "../assets/webshop.jpg";
import AppImage from "../assets/App.png";
import GameImage from "../assets/Game.png";
import FaceImage from "../assets/face.jpg";
import cevede from "../assets/cevede.png";
import seatplan from "../assets/seatplan.jpg";
import { FaArrowUp } from "react-icons/fa";
import "./Projects.css";
import Acute from "../Text/Acute";
import Wound from "../Text/Wound";
class Projects extends React.Component {
  projectsEnum = {
    python: 0,
    face: 1,
    app: 2,
    webshop: 3,
    seatplan: 4,
    cevede: 5
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: this.projectsEnum.acute,
      userClicked: false
    };
  }

  handleClick(photoId) {
    this.setState({ selectedPhoto: photoId, userClicked: true });
  }

  render() {
    console.log(this.props.language);
    return (
      <Segment style={{ padding: this.props.padding }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
          <Header
                as="h3"
                style={{ fontSize: "2em", color: "midnightblue" }}
              >
                Bevorderende activiteiten
              </Header>
            <p>
              Een leven lang leren begint bij mezelf en een belangrijk onderdeel
              hierin is het volgen van klinische lessen, bijscholing, workshops
              en activiteiten volgen welke bijdrage aan mijn ontwikkeling als
              verpleegkundige. Hogeschool Rotterdam bood mij een aantal interne
              workshops waarin in kon oriënteren en ontwikkelen in wat ik wil in
              de toekomst als verpleegkundige. Ook heb ik twee activiteiten
              buiten school gevolgd, zodat ik ook in de praktijk kon zien wat ik
              interessant vind en welke ontwikkeling ik hiervoor kan maken.{" "}
            </p>
            <Divider />
            <Acute />
            <Divider />
            <Wound />
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Projects;
