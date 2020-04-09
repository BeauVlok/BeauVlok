import React from "react";
import { Grid, Header } from "semantic-ui-react";
class SWOT extends React.Component {
  render() {
    return (
      <>
        <div class="main" style={{ minHeight: "30vh" }}>
          <Grid centered id="grid" columns={5}>
            <Grid.Row>
              <Grid.Column id="imageContainer" width={6}>
                <Header
                  as="h6"
                  style={{ fontSize: "1.5em", color: "midnightblue" }}
                >
                  Stertken
                </Header>
                <ul>
                  <li>Luisteren, doorvragen, samenvatten</li>
                  <li> Doorzettingsvermogen </li>
                  <li>Leergierig en onderzoekend </li>
                  <li>Klinische blik </li>
                  <li>Zoeken van uitdaging </li>
                  <li>
                    Taken onderscheiden en overzicht in wat er nog gedaan moet
                    worden, hierbij stel ik prioriteiten{" "}
                  </li>

                  <li>Samenwerken en van elkaar leren doe ik graag. </li>
                </ul>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header
                  as="h6"
                  style={{ fontSize: "1.5em", color: "midnightblue" }}
                >
                  Zwakten
                </Header>
                <ul>
                  <li>
                    Taken delegeren (ik wil het liefst alles zelf doen voor mijn
                    eigen patiënten){" "}
                  </li>
                  <li>
                    Soms nog kennis te kort om goed te kunnen klinisch
                    redeneren.{" "}
                  </li>
                  <li>Hulp vragen </li>
                  <li>
                    Bescheiden over mezelf en mn eigen kunnen, voornamelijk bij
                    beoordelaars.
                  </li>
                </ul>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column id="imageContainer" width={6}>
                <Header
                  as="h6"
                  style={{ fontSize: "1.5em", color: "midnightblue" }}
                >
                  Kansen
                </Header>
                <ul>
                  <li>
                    EBP te werk gaan en deze toe te passen in de praktijk met de
                    nieuwste ontwikkelingen, trends en standaarden.
                  </li>
                  <li>Leiding nemen </li>
                  <li>Multidisciplinair werken en van elkaar kunnen leren </li>
                  <li>Verpleegkundige op de SEH</li>
                </ul>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header
                  as="h6"
                  style={{ fontSize: "1.5em", color: "midnightblue" }}
                >
                  Bedreigingen
                </Header>
                <ul>
                  <li>Te perfectionist in handelen. </li>
                  <li>Kennis te kort om goed te kunnen klinisch redeneren. </li>
                  <li>Aangeven van mijn grenzen kan ik lastig vinden.</li>
                </ul>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </>
    );
  }
}

export default SWOT;
