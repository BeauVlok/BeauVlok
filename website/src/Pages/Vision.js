import React from "react";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";
import rug from "../assets/rug.jpg";
class Vision extends React.Component {
  render() {
    return (
      <Segment style={{ padding: this.props.padding }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header
                as="h3"
                style={{ fontSize: "2em", color: "midnightblue" }}
              >
                Persoonlijke visie
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Ik ben een informatica student aan de Hogeschool Rotterdam. Ik
                heb een VWO diploma met het keuzevak informatica.
              </p>
              <p style={{ fontSize: "1.33em" }}>
                Mijn passie ligt bij het maken van software oplossingen met
                nieuwe technologieën. Ik heb meerdere projecten ontwikkeld met
                C#, Python en Typescript,
              </p>
              <p style={{ fontSize: "1.33em" }}>
                Ik werk momenteel bij LVP en CeVeDe, als fullstack en webshop
                developer. Daarnaast heb ik enkele jaren bij Dirk van den Broek
                gewerkt als teamleider. Bij dit baantje heb ik meerdere skills
                geleerd zoals het commercieel neerzetten van een winkel, werken
                in teamverband en aansturen van werknemers.
              </p>
              <p style={{ fontSize: "1.33em" }}>
                Mijn grootste hobby is software maken, maar daarnaast vind ik
                het ook leuk om aan mijn Mazda Mx5 te sleutelen.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={5}>
              <Image bordered rounded size="large" src={rug} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Vision;
