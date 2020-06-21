import React from "react";
import { Grid, Segment, Header, Divider, Button } from "semantic-ui-react";
import "./Projects.css";
import Acute from "../Text/Acute";
import Wound from "../Text/Wound";
import Extern from "../Text/Extern";
import participation from "../assets/bewijs.pdf";
class Projects extends React.Component {
  render() {
    return (
      <Segment style={{ padding: this.props.padding }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Header as="h3" style={{ fontSize: "2em", color: "midnightblue" }}>
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
              interessant vind en welke ontwikkeling ik hiervoor kan maken.
            </p>
            <div
              style={{ width: "100%", paddingTop: "1em", paddingBottom: "3em" }}
            >
              <a href={participation} target="_blank">
                <Button
                  fluid
                  style={{
                    backgroundColor: "midnightblue",
                    color: "white",
                    width: "60%",
                    marginLeft: "20%",
                  }}
                >
                  Bewijs deelname activiteiten
                </Button>
              </a>
            </div>
            <Divider />
            <Acute />
            <Divider />
            <Wound />
            <Divider />
            <Extern />
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Projects;
