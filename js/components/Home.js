import React from 'react'
import { TouchableHighlight, StyleSheet, Picker, Image } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, Content} from 'native-base';

import { connect } from 'react-redux'
import { fetchData, setSearch, setCategory } from '../actions'
import styles from '../../styles/app'
import DetailedView from './DetailedView'
import ResultList from './ResultList'
import CategoryPicker from './CategoryPicker'

const Home = (props) => {
  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Type a movie, tv show, video game or a band..."
            onChangeText={(text) => props.setSearch(text)}
            value={props.appData.searchingFor} />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <Content>
      <CategoryPicker {...props}/>
      <Button  block onPress={() => props.fetchData()}>
            <Text>Find Similar</Text>
      </Button>
      
      {
        props.appData.isFetching && <Text>Loading</Text>
      }
      {
        props.appData.data.length ? (
          <ResultList {...props} />
        ) : null
      }
      </Content>
    </Container>
  )
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
    setSearch: (text) => dispatch(setSearch(text)),
    setCategory: (value) => dispatch(setCategory(value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
