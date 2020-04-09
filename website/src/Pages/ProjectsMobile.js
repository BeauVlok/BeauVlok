import React from "react";
import { Grid, Segment,  Header, Divider } from "semantic-ui-react";
import "./Projects.css";
import AcuteMobile from "../Text/AcuteMobile";
import WoundMobile from "../Text/WoundMobile";
import ExternMobile from "../Text/ExternMobile";
class Projects extends React.Component {

  render() {

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
            <AcuteMobile />
            <Divider />
            <WoundMobile />
            <Divider/>
            <ExternMobile/>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Projects;
