import React from "react";
import { Header, Grid, Image } from "semantic-ui-react";
import extern from "../assets/extern.png";
class Extern extends React.Component {
  render() {
    return (
      <div vertical style={{ padding: this.props.padding }}>
        <Grid style={{ minHeight: "30vh" }}>
          <Header as="h3" style={{ fontSize: "2em", color: "midnightblue" }}>
            E-learning ABCDE-methodiek bij kinderen
          </Header>
          <Grid.Row columns={6}>
            <Grid.Column width={6}>
              <Image
                bordered
                rounded
                size="large"
                style={{ height: "243px" }}
                src={extern}
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <p>
                Voor deze externe activiteit heb ik gekozen, omdat ik veel
                interesse heb in de acute zorg en hier mijn droombaan ligt.
                Momenteel loop ik stage 3.2 op de kinderchirurgie 1-Zuid en vind
                ik de zorg rondom kinderen erg interessant. Het Sophia boodt
                mij deze e-learning aan en ik vond het erg interessant om te
                leren hoe ik de ABCDE-methodiek bij kinderen kan toepassen en
                dit ook kan meenemen in mijn loopbaan naar de acute zorg. Ook op
                de acute zorg krijg ik te maken met kinderen en is het erg
                belangrijk om de ABCDE-methodiek te kunnen toepassen en de
                verschillen te weten met de volwassenen. Om dit te leren heb ik
                voor deze e-learning gekozen en kan ik meteen verder ontwikkelen
                in het gebruik van de ABCDE-methodiek in het algemeen.
              </p>
            </Grid.Column>
            <Grid.Row></Grid.Row>
            <p>
              <br />
              Ik vond de E-learning erg interessant om te maken en ik heb ook
              een aantal belangrijke verschillen geleerd vergeleken met het
              toepassen van de ABCDE-methodiek bij volwassenen. De E-learning
              ging alle stappen van de ABCDE-methodiek bij kinderen door en ik
              heb voornamelijk geleerd dat je bij het toepassen van de
              ABCDE-methodiek de volgende punten langsgaat tijdens de
              beoordeling; kijken, luisteren, voelen, monitoren en overwegen
              welke interventies nodig zijn. Hierbij heb ik ook geleerd bij elke
              stap welke interventies er eventueel toegepast kunnen worden in
              acute situaties en waarom. Ook bij kinderen is het erg belangrijk
              om regelmatig weer te beginnen bij de A en deze vervolgens her te
              beoordelen en door gaat daar de BCDE. De kennis welke ik heb
              opgedaan tijdens de e-learning neem ik mee nu tijdens mijn stage
              bij het beoordelen van kinderen, maar deze kennis neem ik ook mee
              als verpleegkundige en uiteindelijk in mijn specialisatie in de
              acute zorg.
            </p>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Extern;
