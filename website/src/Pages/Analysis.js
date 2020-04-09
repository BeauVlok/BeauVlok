import React from "react";
import {  Grid, Header, Image, Segment } from "semantic-ui-react";
import swot from "../assets/swot.png";
class Analysis extends React.Component {
  render() {
    return (
      <Segment style={{ padding: this.props.padding }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Header as="h3" style={{ fontSize: "2em", color: "midnightblue" }}>
             Kwaliteiten en tekorten
            </Header>
            <p>
              Om inzicht te krijgen in mijn kwaliteiten en tekorten gerelateerd
              aan mijn toekomstige vakgebied, namelijk de SEH heb ik een
              zelfassesment uitgevoerd. Om dit voor mezelf inzichtelijk te
              maken, heb ik een SWOT-analyse gemaakt. SWOT staat in het Engels
              voor Strenghts (sterkten), Weaknesses (zwakten), opportunities
              (kansen) en threats (bedreigingen). De SWOT-analyse biedt een
              duidelijk overzicht over mijn kwaliteiten en tekorten. Hierdoor
              kan ik mijn kwaliteiten in de zorg inzetten en ontwikkelen in mijn
              valkuilen.
            </p>
{/* <SWOT/> */}
<Image src={swot}/>
            <p>
              <br />
              Naast het maken van een SWOT-analyse heb ik een leerstijlen test
              gedaan. Hieruit komt naar voren wat voor type ik ben en waar ik
              goed in ben. Uit deze test kwam naar voren dat ik een creatieve
              leerstijl heb (leerstijlen test gebaseerd op de theorie van David
              Kolb).Hieronder beknopt weergegeven wat deze leerstijl inhoud:
            </p>
            <ul>
              <li>
                Leren door te observeren en fantasie hierbij gebruiken en
                toepassen.
              </li>
              <li>
                Je gaat veel op je gevoel af en past hierbij de theorie toe.
              </li>
              <li>Brainstormen over leerstof en oplossingen.</li>
              <li>Duidelijkheid is essentieel voor een creatieve leerstijl</li>
              <li>Originele ideeën, welke een ander nog niet bedacht heeft.</li>
            </ul>
            <p>
              Als ik naar deze uitslag kijk, ben ik het er mee eens. Ik houdt
              graag van dingen doen en creatief na te denken hoe ik bepaalde
              dingen kan aanpakken. Ik vind het erg belangrijk dat er
              duidelijkheid is in wat ik doe en hoe ik dit terug kan koppelen
              aan de theorie die er op school uitgelegd is. valkuil hierin voor
              mij is wel dat er te veel gefantaseerd wordt en dat ik te groot ga
              nadenken over de oplossing.
            </p>
            <p>
              Kwaliteiten en tekorten in relatie tot mijn toekomstige vakgebied
              SEH en mobiel medisch traumateam: <br />
              De kwaliteiten die uit de SWOT-analyse en leerstijlen test zijn
              gekomen zijn kwaliteiten welke ik goed kan toepassen in de acute
              zorg als verpleegkundige. Een klinische blik is erg belangrijk,
              uitdaging is er veel te vinden, en het behouden van overzicht is
              iets waar ik goed in ben. Daarbij passen mijn kansen uit de
              SWOT-analyse ook goed in de acute zorg. Natuurlijk zijn er voor
              mij ook valkuilen aanwezig in relatie tot mijn toekomstige
              vakgebied. Een valkuil is het delegeren van taken, het liefst los
              ik alles zelf op, maar op de acute zorg ben je een team en moet je
              ook taken delegeren aan andere. Het aangeven van mijn grenzen kan
              ik nu nog lastig vinden, op de acute zorg is dit wel erg
              belangrijk. Dit zijn twee punten waar ik persoonlijk nog in kan
              groeien en ontwikkelen en dit wil ik ook zeker doen om een goede
              professional te worden op de acute zorg!
            </p>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Analysis;
