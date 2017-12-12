import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, ListView, TextInput, Picker, Modal, Image, Linking, ScrollView} from 'react-native'
import { connect } from 'react-redux'
import { fetchData, setSearch, setCategory, toggleModal, setSelectedItem} from '../actions'
import styles from '../../styles/app'
import DetailedView from './DetailedView'
import ResultList from './ResultList'
import CategoryPicker from './CategoryPicker'

const Home = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40}}
        placeholder="Type a movie, tv show, video game or a band..."
        onChangeText={(text) => props.setSearch(text)}
        value={props.appData.searchingFor}
      />
      <CategoryPicker {...props}/>
      <TouchableHighlight style={styles.searchButton} onPress={() => props.fetchData()}>
        <Text style={styles.buttonText}>Find Similar</Text>
      </TouchableHighlight>
      {
        props.appData.isFetching && <Text>Loading</Text>
      }
      {
        props.appData.data.length ? (
          <ResultList {...props} />
        ) : null
      }
    </View>
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
