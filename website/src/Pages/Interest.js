import React from "react";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";
import interest from "../assets/belang.jpg";
class Interest extends React.Component {
  render() {
      return (
        <Segment style={{ padding: this.props.padding }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Header
                as="h3"
                style={{ fontSize: "2em", color: "midnightblue" }}
              >
                Verpleegkundig belang
              </Header>
              <p>
                Niet alleen de verpleegkundige in opleiding leren voor hun vak,
                ook als je gediplomeerd bent als verpleegkundige betekent dit
                blijven mee ontwikkelen in de nieuwe kennis van de
                gezondheidszorg en dus blijven leren om deze kennis te
                beheersen. Misschien nog wel belangrijker om juist te
                ontwikkelen in het verpleegkundig beroep na het behalen van je
                diploma!
                
              </p>
              <p>
                erken in de zorg betekent op de hoogte zijn van de nieuwe kennis
                en mee gaan in de ontwikkelingen om goede kwaliteit van zorg te
                verlenen. De zorg is in een korte tijd veel verandert en naar
                verwachting zal dit de komende jaren nog veel van toepassing
                zijn. Een mooi voorbeeld van een verandering is; vroeger lag de
                zorg bij de ziekte van een patiënt, nu ligt de zorg voornamelijk
                bij het leren omgaan met de ziekte. Tijdens de opleiding wordt
                er al veel aandacht besteedt aan persoonsgerichte zorg, namelijk
                de zorg die is afgestemd op iemands leven, wensen en behoeften.
                Hierbij speelt eigen regie een belangrijke rol in deze tijd en
                de toekomst. De verpleegkundige gaat samen met de patiënt op
                zoek naar de juiste zorg en ondersteuning (Kennisplein Zorg voor
                Beter, 2020).
              </p>
              <Image centered bordered rounded size="huge" src={interest} />
              <p>
                <br/>
                Dit betekent voor de verpleegkundige dat zij hun leven lang
                zullen leren om deze zorg te kunnen leveren. Het vraagt van de
                verpleegkundige om initiatief te nemen voor bijscholing,
                klinische lessen, e-learnings en steeds op de hoogte zijn van
                vernieuwde protocollen en richtlijnen. Daarnaast van belang om
                geregistreerd te staan in de wet BIG en hiervoor dus het
                initiatief moeten nemen om de handelingen weer te herhalen en
                hiervoor te certificeren. Het doel van de wet BIG is om ervoor
                te zorgen dat kwaliteit in de gezondheidszorg behouden wordt en
                kwaliteit beter wordt. De wet BIG beschermt hierbij patiënten
                (Ministerie van Volksgezondheid, Welzijn en Sport, 2020).
              </p>
              <p>
                Het is belangrijk om als verpleegkundige bewust te zijn dat de
                gezondheidszorg veel in beweging is en veel onderzoeken worden
                uitgevoerd. Als taak van de verpleegkundige is om te willen
                blijven ontwikkelen en te zoeken naar verbeterpunten in de zorg.
                Bij het bovengenoemde speelt verpleegkundig leiderschap een
                belangrijke rol, waar uiteindelijk de verpleegkundige zelf
                initiatief in moet nemen. Wel is het belangrijk dat de
                (regie)verpleegkundigen elkaar hierin stimuleren en ondersteunen
                om dit te kunnen bereiken.
              </p>
            </Grid.Row>
          </Grid>
        </Segment>
      );
   
  }
}

export default Interest;
