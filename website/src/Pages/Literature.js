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
               {this.props.language ? "Literatuur" :"Literature"}
            </Header>

            </GridColumn>
          </GridRow>
        </Grid>
        <Grid columns={this.props.columns} textAlign='center'>
          <Grid.Row verticalAlign='middle'>
          <List>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header style={{color: "midnightblue"}}>Literatuur stuk 1</List.Header>
        <List.Description>
        Bakker, M (2018) Proactive nursing zakboekje. Amsterdam: Boom uitgevers Amsterdam.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header style={{color: "midnightblue"}}>Xian Famous Foods</List.Header>
        <List.Description>
          A taste of Shaanxi's delicious culinary traditions, with delights like
          spicy cold noodles and lamb burgers.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header style={{color: "midnightblue"}}>Sapporo Haru</List.Header>
        <List.Description>
          Greenpoint's best choice for quick and delicious sushi.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header style={{color: "midnightblue"}}>Enid's</List.Header>
        <List.Description>
          At night a bar, during the day a delicious brunch spot.
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Literature