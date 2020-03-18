import React from "react";
import beau from "../assets/beau.jpg";
import "./Head.css";
import { Image } from "semantic-ui-react";
class HeadMobile extends React.Component {
  render() {
    return (
      <>
        <div class="main">
          <Image id="mainImageMobile" src={beau} centered />
          <div id="maincard" centered>
            <h1 class="mainTitleMobile">
              {" "}
              Ervaren. Empathisch. <br />
              Toekomstig Verpleegkundige.
            </h1>
            <p id="mainparMobile">
              Mijn naam is Beau Vlok, 20 jaar en derdejaars hbo-verpleegkunde
              student aan de Hogeschool Rotterdam. Ik ben een leergierige
              student, heb veel doorzettingsvermogen en ik werk gedisciplineerd.
              Ik heb veel plezier in het uitoefenen van mijn toekomstige beroep
              als verpleegkundige. Ik heb kwaliteiten als doorzettingsvermogen,
              plannen, accuraat werken en empathisch zijn. Daarnaast heb ik ook
              een aantal valkuilen, hieronder vallen dat ik te perfectionistisch
              kan zijn waardoor ik onnodig lang bezig ben en …. Iedereen heeft
              kwaliteiten en valkuilen en samen in een team kan je zo elkaar
              goed helpen en gebruiken! Ik heb in mijn opleiding drie stages
              gehad, waar ik veel heb kunnen en mogen leren om mij te
              ontwikkelen. De volgende stages van twintig weken heb ik gelopen:
            </p>
            <p id="mainparMobile">
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
                  Erasmus MC Sophia Kinderchirurgie 1 Zuid, leerunit (heelkunde,
                  urologie en orthopedie){" "}
                </li>
              </ul>
              <p>
                    Op deze website is mijn visie beschreven in relatie tot een
                    leven lang leren. Bij het ontwikkelen van mijn visie, heb ik
                    onderzocht wat verpleegkundig leiderschap is en wat dit voor
                    mij inhoudt. Heb ik kwaliteiten en tekorten in relatie met
                    mijn toekomstgebied meegenomen. Als laatste heb ik
                    beschreven welke workshops en activiteiten ik heb gevolgd en
                    welke bijdrage deze hebben gehad om mijn visie te kunnen
                    formuleren.{" "}
                  </p>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default HeadMobile;
