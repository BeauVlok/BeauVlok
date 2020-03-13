import React from 'react'
import beau from '../assets/beau.jpg'
import './Head.css'
import { FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {
    Image, Card, Grid
  
} from 'semantic-ui-react'
class Head extends React.Component {
    render() {
        return (
            < >
    
     <div class="main" style={{minHeight: "70vh"}}>
     <Grid centered id="grid" columns={5} >
    <Grid.Row>
      <Grid.Column width={5}>
            <Image id="mainImage"src={beau}/>
         </Grid.Column>
         <Grid.Column width={8}>
                <div id="maincard"centered>
               
                    <h1 class="mainTitle"> Ervaren. Empathisch. <br/>Toekomstig Verpleegkundige.</h1>
                    <p id="mainpar">Mijn naam is Beau Vlok, 20 jaar en derdejaars hbo-verpleegkunde student aan de Hogeschool Rotterdam. Ik ben een leergierige student, heb veel doorzettingsvermogen en ik werk gedisciplineerd. 
                          Ik heb veel plezier in het uitoefenen van mijn toekomstige beroep als verpleegkundige. 
Ik heb kwaliteiten als doorzettingsvermogen, plannen, accuraat werken en empathisch zijn. Daarnaast heb ik ook een aantal valkuilen, hieronder vallen dat ik te perfectionistisch kan zijn waardoor ik onnodig lang bezig ben en …. Iedereen heeft kwaliteiten en valkuilen en samen in een team kan je zo elkaar goed helpen en gebruiken! 
Ik heb in mijn opleiding drie stages gehad, waar ik veel heb kunnen en mogen leren om mij te ontwikkelen. De volgende stages van twintig weken heb ik gelopen: 
</p>
<ul>
    <li>
    Revalidatiecentrum Rijndam, neuro-afdeling NAH (niet aangeboren hersenletsel)
    </li>
    <li>
    Erasmus MC Zorgkern Beweging, werkplekleren (orthopedie, plastische chirurgie, traumachirurgie) 
    </li>
    <li>Erasmus MC Sophia Kinderchirurgie 1 Zuid, leerunit (heelkunde, urologie en orthopedie) </li>

</ul>
                </div>
                </Grid.Column>
                </Grid.Row>
                </Grid>
                </div>
                </>
        )
    }
}

export default Head