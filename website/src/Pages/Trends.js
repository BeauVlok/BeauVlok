import React from "react";
import {  Grid, Header, Image, Segment } from "semantic-ui-react";
import trends from "../assets/trends.jpg";
class Trends extends React.Component {
  render() {
    return (
      <Segment style={{ padding: this.props.padding }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Header as="h3" style={{ fontSize: "2em", color: "midnightblue" }}>
              Trends en ontwikkelingen
            </Header>
            <p>
              Binnen de gezondheidszorg zijn de laatste jaren veel
              ontwikkelingen, waar wij als verpleegkundige maar daarnaast
              patiënten ook veel mee te maken hebben. Een aantal van deze
              ontwikkelingen zal ik hieronder beschrijven welke een invloed
              hebben nu tijdens mijn ontwikkeling, maar ook later in mijn
              toekomstige vakgebied naar de ontwikkeling op de SEH en medisch
              mobiel trauma team.
            </p>
            <p>
              De grootste ontwikkeling in de zorg voor de komende jaren is de
              vergrijzing. Er is een toename van ouderen welke zorg nodig
              hebben. Hierbij komen ook steeds meer tegelijk aandoeningen bij
              kijken, comorbiditeit genoemd. Wat hierbij vooral verandert is
              kortere ziekenhuis opnames en steeds complexere zorg thuis. Dit
              vraagt om een aanpassing aan het zorgsysteem en de vaardigheden
              van de verpleegkundige thuis en patiënten (Volksgezondheid, 2018).
              Deze ontwikkeling zal ook de acute zorg benaderen, mensen worden
              ouder, vallen en leven langer met een ziektebeeld. Hierdoor is een
              opname via de SEH, niet meer weg te denken. Belangrijk om hierin
              te ontwikkelen en mee te gaan met de vergrijzing.
            </p>
            <p>
              Een ander niet te missen ontwikkeling is de toenemende
              digitalisering in de gezondheidszorg. Steeds meer wordt er
              verwacht dat iedereen met deze technologieën kan mee ontwikkelen
              en kan toepassen, alleen met de toenemende vergrijzing kan dit
              niet altijd verwacht worden. Voorbeelden van deze technologieën
              zijn robots welke de eenzaamheid bij ouderen weg kunnen nemen,
              robots welke ingezet worden bij operaties, eHealth en domotica
              welke er voor zorgen dat mensen langer thuis kunnen blijven wonen.
              Daarnaast wordt er tegenwoordig veel met 3D-printing gedaan, wat
              leidt tot meer producten op maat. Ook virtual reality komt steeds
              meer terug in de gezondheidzorg om zorgprofessionals te trainen in
              nagemaakte zorgsettingen. Dit zijn maar een aantal voorbeelden van
              de digitalisering, maar zeer voor verpleegkundige en patiënten
              essentieel om hierin mee te ontwikkelen (Volksgezondheid, 2018).
            </p>
            <Image bordered rounded size="huge" centered src={trends} />

            <p>
              <br />
              Een andere ontwikkeling in 2020 is de nieuwe wet zorg en dwang. De
              nieuwe wet zorg en dwang sluit meer aan bij mensen met dementie of
              een verstandelijke beperking. De mensen die niet meer hierdoor hun
              wil kunnen uiten worden beter beschermd door de wet. Door de
              toenemende vergrijzing is dit een nieuwe belangrijke wet en
              ontwikkeling voor Nederland (Ministerie van Volksgezondheid,
              Welzijn en Sport, 2020).
            </p>
            <p>
              De wet BIG-II zal ons als verpleegkundige (in opleiding) niet
              ontgaan zijn. Het onderscheid tussen hbo en mbo opgeleide
              verpleegkundige, waarbij de hbo verpleegkundige de functie als
              regieverpleegkundige krijgen. Hierbij horen naast je
              verpleegkundige functies nieuwe functies als het indiceren en
              organiseren van zorg, klinisch redeneren in complexe situatie en
              het toepassen van EBP. Met dit nieuwe wetvoorstel in 2019, is veel
              ophef geweest van de verpleegkundige welke dezen taken al jaren
              uitvoert en dat dadelijk ineens niet meer mogen doen. Naar
              verwachting zal er in 2020 een voorstel gedaan worden hoe de
              Nederlandse gezondheidszorg dit wil aanpakken (Kennisplein Zorg
              voor Beter, 2019) & (Han university of applied sciences, 2019).
            </p>
            <p>
              Persoonlijke visie met de ontwikkelingen en trends: <br />
              Ik vind het erg belangrijk dat ik, maar alle verpleegkundige, mee
              ontwikkelen in de zorg. De vergrijzing is een feit waar iedereen
              in de zorg mee te maken gaat krijgen. Zowel revalidatie,
              verzorgingshuizen als ziekenhuizen en ook de acute zorg waar mijn
              droom ligt. Ook de digitalisering is een feit en de komende jaren
              zal dit nog flink ontwikkelen, ook hiervoor geld dat alle
              zorgorganisaties hiermee te maken krijgen. Ik vind de
              digitalisering goed, omdat het ook veel voordelen heeft.
              Bijvoorbeeld de operatierobots zorgen voor nauwkeurig werk en
              korter herstel. Ook de eenzaamheid bij ouderen kan door
              digitalisering verminderd worden, wat zeker met de vergrijzing een
              belangrijk voordeel kan zijn en ik ben van mening dat dit erg goed
              kan zijn om eenzaamheid voor een deel weg te kunnen nemen.
            </p>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Trends;
