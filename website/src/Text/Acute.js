import React from "react";
import { Header, Grid, Image, Segment } from "semantic-ui-react";
import rug from "../assets/rug.jpg";
class Acute extends React.Component {
  render() {
    return (
      <div vertical style={{ padding: this.props.padding }}>
          <Grid  style={{ minHeight: "30vh" }}>
          <Header
                as="h3"
                style={{ fontSize: "2em", color: "midnightblue" }}
              >
                Acute zorg
              </Header>
      <Grid.Row columns={6}>
          <Grid.Column width={6}>
      <Image bordered rounded size="large" src={rug} />   
      </Grid.Column>
      <Grid.Column width={10}>
        <p>
          De keuze voor de workshop acute zorg komt voort uit mijn toekomst
          doel, namelijk verpleegkundig specialist op de SEH en uiteindelijk in
          een medisch mobiel traumateam. Deze droom roep ik al sinds mijn
          kinderjaren en wil ik nog steeds erg graag bereiken in de komende
          jaren. Omdat ik nog weinig kennis heb gehad over de acute zorg, was ik
          erg geïnteresseerd in deze workshop. Het is voor mijn toekomstige vak
          als verpleegkundige belangrijk dat ik de kennis heb om in de acute
          zorg te werken en met deze workshop hoopte ik hier een begin aan te
          maken. Ook in de acute zorg hoort een leven lang leren, omdat ook hier
          de zorg steeds verder ontwikkeld met de tijd en dus zal blijven
          veranderen. Het lijkt mij interessant om als verpleegkundige (in
          opleiding) met hun mee te ontwikkelen en dus eigenlijk nu al te
          beginnen met een leven lang leren. Ook uit de SWOT-analyse komt naar
          voren dat ik kwaliteiten heb als het zoeken van uitdaging en overzicht
          behoud het zoeken van creativiteit. Dit zijn drie eigenschappen die ik
          kan inzetten in de acute zorg en welke naar mijn mening ook belangrijk
          zijn. Hierdoor ben ik erg enthousiast geworden om meer te weten over
          de acute zorg en de rol van de verpleegkundige hierin.{" "}
    
        </p>
        </Grid.Column>
        <Grid.Row></Grid.Row>
        <p>
        <br/>
          Over de workshop acute zorg ben ik erg tevreden en ben ik nog
          enthousiaster geworden om te werken in de acute zorg. Wat mij het
          meest is bijgebleven van de workshops is de hoeveelheid kennis die je
          als verpleegkundige opdoet en dat twijfelen aan je kennis geen optie
          is in een levensbedreigende situatie. Hierbij is klinisch redeneren
          een onmisbaar onderdeel. Dit is een punt waar ik zeker nog in kan
          ontwikkelen, ik vind het namelijk nu best lastig wanneer bel ik de
          arts en vind ik dat deze echt moet komen. Ik kan mezelf dus meer
          ontwikkelen om naar een arts toe te stappen en mijn (klinische) kennis
          en ervaring te delen en hierbij zelfvertrouwen uit te stralen. Ook heb
          ik veel kunnen oefenen met de ABCDE-methodiek, wat ik erg interessant
          vind om toe te passen op casussen. Het werken met de ABCDE is nog iets
          waar ik veel in kan ontwikkelen, maar de kennis die ik nu heb opgedaan
          kan ik zeker meenemen in mijn stages in het ziekenhuis.{" "}
        </p>
        </Grid.Row>
        </Grid>
</div>
    );
  }
}

export default Acute;
