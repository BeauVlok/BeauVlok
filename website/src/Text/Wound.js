import React from "react";
import { Header, Grid, Image } from "semantic-ui-react";
import wound from "../assets/wondzorg.jpg";
class Wound extends React.Component {
  render() {
    return (
      <div vertical style={{ padding: this.props.padding }}>
        <Grid style={{ minHeight: "30vh" }}>
          <Header as="h3" style={{ fontSize: "2em", color: "midnightblue" }}>
            Wondzorg
          </Header>
          <Grid.Row columns={6}>
            <Grid.Column width={6}>
              <Image
                bordered
                rounded
                size="large"
                style={{ height: "393px" }}
                src={wound}
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <p>
                De keuze voor deze workshop heb ik gedaan, omdat ik de zorg
                rondom wonden erg interessant vind, maar tegelijkertijd ook een
                ingewikkelde zorg vind. Dit komt door de vele soorten wonden die
                kunnen ontstaan en welke allemaal een andere wondzorg nodig
                hebben. Als stagiaire op de afdeling Zorgkern Beweging heb ik
                regelmatig met de wondverpleegkundige gewerkt en heb ik veel
                grote wonden gezien, die speciale zorg nodig hebben. Wanneer ik
                kijk naar mijn toekomstbeeld op de SEH, is dit ook een nuttige
                workshop voor mij, omdat ik hier ook regelmatig mensen met
                wonden zal tegenkomen. Omdat ik vooral de basiskennis weet van
                de wonden, vond ik het interessant om deze workshop te volgen,
                zodat ik mijn basiskennis kan verbreden naar verdieping. Deze
                verdieping kan ik meenemen als verpleegkundige in het algemeen
                en zeker ook als verpleegkundige op de SEH, wat al jaren mijn
                toekomstdroom is. De zorg rondom wonden is in de afgelopen jaren
                veel ontwikkeld en naar verwachting zal hier de komende jaren
                nog meer ontwikkeling in komen. Hierdoor is het voor mij als
                verpleegkundige van belang dat ik een leven lang leer, zodat er
                met het beste bewijs wordt gewerkt aan de wondzorg.
              </p>
            </Grid.Column>
            <Grid.Row></Grid.Row>
            <p>
              <br />
              De workshop wondzorg heb ik thuis gevolgd, in verband met het
              corona virus. Maar ook door de workshop thuis te volgen ben ik erg
              tevreden en heb ik meer kennis gekregen over de wondzorg. De
              powerpoints van het Erasmus MC hebben mij hierbij veel geholpen en
              heb ik vooral geleerd welke wonden er zijn en hoe ik aan de hand
              van de richtlijn wondbehandeling van het Erasmus MC, kan
              beredeneren waarom ik kies voor een bepaalde wondbehandeling. Ik
              vond de vervangende opdracht waarbij ik de wond volgens ALTIS en
              TIME heb omschreven erg leuk en leerzaam. Hierdoor heb ik met
              behulp van de powerpoints en literatuuronderzoek beredeneerd hoe
              ik een wond zou verzorgen bij een casus uit de praktijk.
              Natuurlijk kan ik hier nog veel in ontwikkelen, omdat ik nu nog
              niet alles uit mijn hoofd weet en nog niet alle kennis bezit van
              wonden en materialen. Maar deze kennis welke ik opgedaan heb, neem
              ik mee in mijn toekomst als verpleegkundige en wellicht maak ik
              ooit nog de keuze om wondverpleegkundige te worden door deze
              workshop en mijn interesse in wonden. Daarnaast wil ik blijven mee
              ontwikkelen in de vernieuwde wondzorg en materialen, zodat er de
              beste zorg aan wonden gegeven kan worden door verpleegkundigen.
            </p>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Wound;
