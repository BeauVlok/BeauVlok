import React from 'react'
import {
  Grid,
  Header,
  Segment,
  GridRow,
  GridColumn,
  List
} from 'semantic-ui-react'

class Literature extends React.Component {

  render() {
    return (
      <Segment style={{ padding: this.props.padding  }} vertical>
        <Grid columns={2} textAlign='center'>
          <GridRow>
            <GridColumn>
              <Header as='h3' style={{ fontSize: '2em' }}>
              <br/>
 Literatuur
            </Header>

            </GridColumn>
          </GridRow>
        </Grid>
        <Grid columns={3} columns={this.props.columns} textAlign='left'>
          <Grid.Row horizontalAlign='middle' >
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={8}>
          <List>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header style={{color: "midnightblue"}}>Literatuur stuk 1</List.Header>
        <List.Description>
        Han university of applied sciences. (2019, 3 september). Overgangsregeling (NLQF6). Geraadpleegd 	op 20 februari 2020, van https://hanvdo.nl/overgangsregeling-nlqf6/ 
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header style={{color: "midnightblue"}}>Literatuur stuk 2</List.Header>
        <List.Description>
        Kennisplein Zorg voor Beter. (2019, 17 juni). Overgangsregeling voor regieverpleegkundigen. 	Geraadpleegd op 20 maart 2020, van 	https://www.zorgvoorbeter.nl/nieuws/overgangsregeling-voor-regieverpleegkundigen 
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header style={{color: "midnightblue"}}>Literatuur stuk 3</List.Header>
        <List.Description>
          Kennisplein Zorg voor Beter. (2020, 13 februari). Persoonsgerichte zorg. Geraadpleegd op 17 maart 	2020, van https://www.zorgvoorbeter.nl/persoonsgerichte-zorg
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header style={{color: "midnightblue"}}>Literatuur stuk 4</List.Header>
        <List.Description>
        Lambregts, J., Grotendorst, A., & van Merwijk, C. (2016). Bachelor of Nursing 2020: Een 	Toekomstbestendig Opleidingsprofiel. Houten: Bohn Stafleu van Loghum. 		https://www.venvn.nl/Portals/1/Nieuws/Ouder%20dan%202010/3_profiel%20verpleegkund	ige_def.pdf
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header style={{color: "midnightblue"}}>Literatuur stuk 5</List.Header>
        <List.Description>
        Ministerie van Volksgezondheid, Welzijn en Sport. (2020, 1 januari). Wet zorg en dwang (Wzd). 	Geraadpleegd op 18 maart 2020, van https://www.dwangindezorg.nl/wzd 
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header style={{color: "midnightblue"}}>Literatuur stuk 6</List.Header>
        <List.Description>
        Ministerie van Volksgezondheid, Welzijn en Sport. (2020, 6 januari). Wet- en regelgeving. 	Geraadpleegd op 18 maart 2020, van https://www.bigregister.nl/registratie/nederlands-	diploma-registreren/wet--en-regelgeving
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header style={{color: "midnightblue"}}>Literatuur stuk 7</List.Header>
        <List.Description>
        Volksgezondheid. (2018). Belangrijkste ontwikkelingen | Volksgezondheid Toekomst Verkenning. 	Geraadpleegd op 17 maart 2020, van https://www.vtv2018.nl/belangrijkste-ontwikkelingen
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
  </Grid.Column>
  <Grid.Column width={4}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Literature