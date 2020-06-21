import React from "react";
import { Header, Grid, Image } from "semantic-ui-react";
import safety from "../assets/Safety.jpg";
class Safety extends React.Component {
  render() {
    return (
      <div vertical style={{ padding: this.props.padding }}>
        <Grid style={{ minHeight: "30vh" }}>
          <Header as="h3" style={{ fontSize: "2em", color: "midnightblue" }}>
            Medicatieveiligheid en farmacologie
          </Header>
          <Grid.Row columns={6}>
            <Grid.Column width={6}>
              <Image
                bordered
                rounded
                size="large"
                style={{ height: "313px" }}
                src={safety}
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <p>
                Het werken met medicatie is als verpleegkundige een belangrijk
                onderdeel van het vak. Elke dienst zal iedere verpleegkundige te
                maken hebben met medicatie. Maar hoe werkt medicatie? Waarom is
                het zo belangrijk om te weten wat ik geef als verpleegkundige en
                hoe ga ik om met bijwerkingen en contra-indicaties en wat is
                mijn rol hierin als verpleegkundige? Het werken met medicijnen
                blijft tevens ook mensenwerk en mensen kunnen fouten maken. Hoe
                kan ik als verpleegkundige zorgen dat er veilig gewerkt wordt
                met medicatie? Omdat overal in het verpleegkundig werk met
                medicatie omgegaan wordt en zeker ook op de SEH waar mijn droom
                ligt heb ik gekozen voor deze workshop. Ik hoop met deze
                workshop antwoord te krijgen op mijn bovengenoemde vragen. Ik
                vind het belangrijk dat ik weet hoe medicijnen werken, maar ook
                hoe het lichaam reageert op medicijnen ook wel de
                farmacokinetiek en farmacodynamiek genoemd.
              </p>
            </Grid.Column>
            <Grid.Row></Grid.Row>
            <p>
              <br />
              Ik vond het volgen van deze cursus erg leuk en heel leerzaam. Door
              de online-les is er veel uitgelegd over de farmacokinetiek en
              farmacodynamiek. Door vooraf de voorbereidende filmpjes te kijken,
              heeft dit weer veel informatie opgefrist, waardoor ik de pittige
              lesstof van de online les goed kon volgen. Uitgebreid zijn de
              fases omschreven wat het lichaam met het medicijn doet. Hierdoor
              heb ik geleerd waar ik op kan letten tijdens medicatie en hoe het
              lichaam kan reageren. Natuurlijk moet ik voor veel medicatie dit
              nog uitzoeken, maar ik heb geleerd dat dit heel belangrijk is,
              omdat je gewoon moet weten wat je een patiënt geeft en wat de
              reacties van het medicijn kunnen zijn. Er is wat minder aandacht
              besteed in de lessen aan medicatieveiligheid, omdat dit ook
              teruggekomen is tijdens de geneeskunde les. In kernwoorden wat ik
              geleerd heb is de opfrissing van de farmacokinetiek en
              farmacodynamiek. Door dit toe te passen op een casusopdracht heb
              ik kunnen werken met medicijnen en inzicht gekregen dat er goed
              opgelet moet worden wat er gegeven wordt, wat de bijwerkingen
              kunnen zijn en eventuele contra-indicaties van medicijnen.
            </p>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Safety;
