import React from "react";
import { Header, Grid, Image,} from "semantic-ui-react";
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
              <Image bordered rounded size="large" style={{height: "393px"}} src={wound} />
            </Grid.Column>
            <Grid.Column width={10}>
              <p>
                De keuze voor deze workshop komt voort, omdat ik de zorg rondom
                wonden erg interessant vind, maar tegelijkertijd ook een
                ingewikkelde zorg vind. Dit komt door de vele soorten wonden die
                kunnen ontstaan en welke allemaal een andere wondzorg nodig
                hebben. Als stagiaire op de afdeling Zorgkern Beweging heb ik
                regelmatig met de wondverpleegkundige gewerkte en heb ik veel
                grote wonden gezien, die speciale zorg nodig hebben. Wanneer ik
                kijk naar mijn toekomstbeeld op de SEH, is dit ook een nuttige
                workshop voor mij, omdat ik hier ook regelmatig mensen met
                wonden zal tegenkomen. Omdat ik vooral de basiskennis weet van
                de wonden, vond ik het interessant om deze workshop te volgen
                zodat ik mijn basiskennis kan verbreden naar verdieping. Deze
                verdieping kan ik meenemen als verpleegkundige in het algemeen
                en zeker ook als verpleegkundig specialist op de SEH, wat al
                jaren mijn toekomstdroom is. De zorg rondom wonden is in de
                afgelopen jaren veel ontwikkeld en naar verwachting zal hier de
                komende jaren nog meer ontwikkeling in komen. Hierdoor is het
                voor mij als verpleegkundige van belang dat ik een leven lang
                leer, zodat er met het beste bewijs wordt gewerkt aan de
                wondzorg.{" "}
              </p>
            </Grid.Column>
            <Grid.Row></Grid.Row>
            <p>
              <br />
              De keuze voor deze workshop komt voort, omdat ik de zorg rondom
              wonden erg interessant vind, maar tegelijkertijd ook een
              ingewikkelde zorg vind. Dit komt door de vele soorten wonden die
              kunnen ontstaan en welke allemaal een andere wondzorg nodig
              hebben. Als stagiaire op de afdeling Zorgkern Beweging heb ik
              regelmatig met de wondverpleegkundige gewerkte en heb ik veel
              grote wonden gezien, die speciale zorg nodig hebben. Wanneer ik
              kijk naar mijn toekomstbeeld op de SEH, is dit ook een nuttige
              workshop voor mij, omdat ik hier ook regelmatig mensen met wonden
              zal tegenkomen. Omdat ik vooral de basiskennis weet van de wonden,
              vond ik het interessant om deze workshop te volgen zodat ik mijn
              basiskennis kan verbreden naar verdieping. Deze verdieping kan ik
              meenemen als verpleegkundige in het algemeen en zeker ook als
              verpleegkundig specialist op de SEH, wat al jaren mijn
              toekomstdroom is. De zorg rondom wonden is in de afgelopen jaren
              veel ontwikkeld en naar verwachting zal hier de komende jaren nog
              meer ontwikkeling in komen. Hierdoor is het voor mij als
              verpleegkundige van belang dat ik een leven lang leer, zodat er
              met het beste bewijs wordt gewerkt aan de wondzorg.{" "}
            </p>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Wound;
