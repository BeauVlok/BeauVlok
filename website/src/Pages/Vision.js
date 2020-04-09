import React from "react";
import {  Grid, Header, Image, Segment } from "semantic-ui-react";
import visie from "../assets/visie.png";
class Vision extends React.Component {
  render() {
    return (
      <Segment style={{ padding: this.props.padding }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row >
              <Header
                as="h3"
                style={{ fontSize: "2em", color: "midnightblue" }}
              >
                Persoonlijke visie
              </Header>
              <Grid  style={{ minHeight: "30vh" }}>
              <Grid.Row columns={10}>
          <Grid.Column width={10}>
              <p>
                In 2021 hoop ik HBO-verpleegkundige te zijn, tegenwoordig ook
                wel de functie regieverpleegkundige genoemd. Maar wat houdt dit
                voor mij precies in? En hoe ontwikkel ik mijn eigen visie en
                verpleegkundig leiderschap?
              </p>
              <p>
                Als hbo’ers en dus als regieverpleegkundigen, komen er nieuwe
                taken bij bovenop de verpleegkundige zorg. Dit betekent voor mij
                indiceren en organiseren van zorg, in complexe situaties
                klinisch redeneren, EBP te integreren in de geleverde zorg en
                hierin een leidende rol hebben (Kennisplein Zorg voor Beter,
                2019). Hierbij is het tonen van verpleegkundig leiderschap een
                belangrijk onderdeel.
              </p>
              <p>
                Begin van dit studiejaar werd mij gevraagd hoe ik verpleegkundig
                leiderschap toon in de praktijk? Voor mij een begrip wat ik vaak
                heb gehoord, maar nog nooit bij stilgestaan heb over wat ik
                belangrijk vind in de zorgverlening en hoe ik dit wil tonen als
                verpleegkundige. Tot dit schooljaar, de laatste maanden heb ik
                mij hierin verdiept en een eigen mening gevormd. In bachelor
                2020 wordt verpleegkundig leiderschap omschreven als ‘’het
                initiatief nemen in het uitvoeren van regie over het eigen
                vakgebied vanuit een ondernemende, coachende en
                resultaatgerichte houding’’ (Lambregts, Grotendorst, van
                Merwijk, & van Merwijk, 2016). Voor mij betekend verpleegkundig
                leiderschap het werken aan verbeterpunten en behouden van
                kwaliteitszorg, eerlijkheid tonen naar de patiënt(en), in acht
                nemen van eigen bevoegd en bekwaamheid, goede samenwerken met
                andere disciplines en regie nemen om te blijven (mee)
                ontwikkelen in de gezondheidszorg en dit te delen met collega’s
                en te integreren op de afdeling.
              </p>
              </Grid.Column>
          <Grid.Column width={6}>
              <Image bordered rounded size="large" centered src={visie} />
              </Grid.Column>
              </Grid.Row>
              </Grid>
              <p>
                <br/>
                Wat ik belangrijk vind in de zorg zijn de ontwikkelingen en
                hierin mee te ontwikkelen als verpleegkundige. Waarom worden de
                dingen gedaan zoals ze worden gedaan? Kan het efficiënter? Zijn
                er andere manieren om de zorg te leveren? Ik vind het erg
                belangrijk dat alle verpleegkundigen kritische vragen blijven
                stellen over het (eigen) handelen en hierdoor dus een leven lang
                leren door steeds te onderzoeken doen wij inderdaad wat goed is,
                waar is dit op gebaseerd én kan het beter? Het is ontzettend
                belangrijk om dit altijd af te vragen en om te blijven
                leren/ontwikkelen om de beste kwaliteit van zorg te kunnen
                leveren voor de patiënt, hierbij wil ik bereiken dat er niet
                geroepen wordt ‘’zo doen wij het al jaren’’, dus het is goed...
                Hierbij wil ik als HBO-verpleegkundige mijn verantwoording in
                nemen en mijn verpleegkundig leiderschap tonen om samen met de
                collega’s mee te ontwikkelen in de tijd en de beste kwaliteit
                van zorg te leveren, zonder dat wij roepen ‘’zo doen wij het al
                jaren’’.
              </p>
              <p>
                Sinds mijn kinderjaren roep ik dat ik verpleegkundige op de SEH
                wil worden, dit is altijd nog een doel die ik graag wil
                bereiken, maar mijn droombaan en doel is om te werken in een
                mobiel medisch trauma team. De acute zorg trekt mij zo aan,
                omdat ik afwisseling, uitdaging, spanning en snel handelen
                ontzettend leuk en interessant vind om toe te passen in de zorg.
                Dit is ook reden geweest om te starten aan de HBO-V en
                uiteindelijk door te stromen naar de SEH en vanuit hier naar een
                mobiel medisch traumateam. Ook in de acute zorg is het hebben
                van een eigen visie erg belangrijk en zeker het tonen van
                verpleegkundig leiderschap zoals ik hierboven heb beschreven wat
                ik belangrijk vind. In de acute zorg verandert de zorg ook veel
                en zijn er ook veel ontwikkelingen Ook hier is het mijn taak om
                een leven lang te leren en mee te ontwikkelen. Hierbij wil ik
                mijn verpleegkundig leiderschap zoals hierboven beschreven
                meenemen in mijn toekomstig vakgebied.
              </p>
         
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Vision;
