import React from "react";
import beau from "../assets/beau.jpg";
import "./Head.css";
import { Image, Grid } from "semantic-ui-react";
class Head extends React.Component {
  render() {
    return (
      <>
        <div class="main" style={{ minHeight: "70vh" }}>
          <Grid centered id="grid" columns={5}>
            <Grid.Row>
              <Grid.Column id="imageContainer" width={5}>
                <Image id="mainImage" src={beau} />
              </Grid.Column>
              <Grid.Column width={8}>
                <div id="maincard" centered>
                  <h1 class="mainTitle">
                    {" "}
                    Ervaren. Empathisch. <br />
                    Toekomstig Verpleegkundige.
                  </h1>
                  <p id="mainpar">
                    Mij naam is Beau Vlok, 20 jaar en derdejaars
                    hbo-verpleegkunde student aan de Hogeschool Rotterdam. Ik
                    ben een leergierige student, heb veel doorzettingsvermogen
                    en ik werk gedisciplineerd. Ik heb veel plezier in het
                    uitoefenen van mijn toekomstige beroep als verpleegkundige.
                    Ik heb in mijn opleiding drie stages gehad, waar ik veel heb
                    kunnen en mogen leren om mij te ontwikkelen. De volgende
                    stages van twintig weken heb ik gelopen:
                  </p>
                  <ul>
                    <li>
                      Revalidatiecentrum Rijndam, neuro-afdeling NAH (niet
                      aangeboren hersenletsel)
                    </li>
                    <li>
                      Erasmus MC Zorgkern Beweging, werkplekleren (orthopedie,
                      plastische chirurgie, traumachirurgie)
                    </li>
                    <li>
                      Erasmus MC Sophia Kinderchirurgie 1 Zuid, leerunit
                      (heelkunde, urologie en orthopedie){" "}
                    </li>
                  </ul>
                  <p id="mainpar">
                    Op deze website is mijn visie beschreven in relatie tot een
                    leven lang leren. Bij het ontwikkelen van mijn visie, heb ik
                    onderzocht wat verpleegkundig leiderschap is en wat dit voor
                    mij inhoudt. Heb ik kwaliteiten en tekorten in relatie met
                    mijn toekomstgebied meegenomen. Als laatste heb ik
                    beschreven welke workshops en activiteiten ik heb gevolgd en
                    welke bijdrage deze hebben gehad om mijn visie te kunnen
                    formuleren.{" "}
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </>
    );
  }
}

export default Head;
