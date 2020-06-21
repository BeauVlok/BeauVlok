import React from "react";
import { Header, Image } from "semantic-ui-react";
import ehbo from "../assets/EHBO.jpg";
class EHBOMobile extends React.Component {
  render() {
    return (
      <div vertical style={{ padding: this.props.padding }}>
        <Header as="h3" style={{ fontSize: "2em", color: "midnightblue" }}>
          EHBO cursus online
        </Header>
        <Image bordered rounded size="large" src={ehbo} />

        <p>
          Als tweede externe activiteit heb ik gekozen voor de EHBO cursus van
          het Rode Kruis. Voorafgaand aan de cursus heb ik nog nooit mijn EHBO
          certificaat behaald. Omdat ik wil werken in de acute zorg, vond ik het
          leerzaam en belangrijk om deze cursus te volgen. Hierdoor kan ik leren
          welke zorg geleverd kan worden bij eerste hulp bij ongelukken. Het
          behalen van een EHBO certificaat kan ik ook terug koppelen aan mijn
          toekomstige droom. Doordat ik nu al bezig ben met ontwikkelen wat er
          bij komt kijken in de acute zorg. Maar buiten de acute zorg om, is het
          altijd erg handig om EHBO-gercetificeerd te zijn, zodat ik altijd hulp
          kan verlenen.
        </p>
        <p>
          <br />
          Tijdens de online cursus heb ik nog veel kunnen leren. De volgende
          onderwerpen kwamen aan bod: brandwonden, huidwonden, bloedingen,
          verslikkingen en letsel door contact met dieren en planten. Hierbij
          heb ik geleerd per onderwerp hoe ik het slachtoffer in veiligheid kan
          brengen, hoe ik de toestand kan beoordelen, welke hulpdiensten er
          ingeschakeld moeten worden en welke EHBO ik kan verlenen. Deze kennis
          neem ik mee en kan ik hulp verlenen op straat. Ook betekent dit voor
          mij dat ik mij in kennis heb ontwikkeld wat ik de komendje jaren mee
          kan nemen naar de acute zorg. Het onderwerp letsel door contact met
          dieren en planten vond ik lastig, omdat ik daar de minste ervaring en
          kennis mee heb, wel is het belangrijk om ook hier de juiste kennis van
          te hebben om goede zorg te kunnen leveren. Om deze reden wil ik mij
          hierin nog verdiepen, zodat ik de kennis kan onthouden en kan
          toepassen indien nodig.
        </p>
      </div>
    );
  }
}

export default EHBOMobile;
