import React from 'react'
import { View, StatusBar } from 'react-native'
import { Text, Spinner, Container } from 'native-base';

import { connect } from 'react-redux'
import { fetchData, setSearch, setCategory, setSuggestion} from '../actions'
import styles from '../../styles/app'
import ResultList from './ResultList'
import SearchBar from './SearchBar'

const Home = (props) => {
  return (
    <Container>
      <StatusBar backgroundColor="#2C3E50"/>
      <SearchBar {...props}/>
      {
        props.appData.isFetching &&  <Spinner color='blue' />
      }
      {
        props.appData.data.length ? (
          <ResultList {...props}/>
        ) : null
      }
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
    setSuggestion: (value) => dispatch(setSuggestion(value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
