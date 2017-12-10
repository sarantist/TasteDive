import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, ListView, TextInput, Picker, Modal, Image, Linking, ScrollView} from 'react-native'
import { connect } from 'react-redux'
import { fetchData, setSearch, setCategory, toggleModal, setSelectedItem} from '../actions'
import styles from '../../styles/app'
import DetailedView from './DetailedView'
import Row from './Row'
import CategoryPicker from './CategoryPicker'

const Home = (props) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  
  // Opens a modal that displays more info about the selected item
  function showDetails(data) {
    props.setSelectedItem(data)
    props.navigation.navigate("DetailedView", data);
  }

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
          <View style={{flex: 1}}>
            <ListView 
              dataSource={ds.cloneWithRows(props.appData.data)}
              renderRow={(data, sectionID, rowID) => 
                <TouchableHighlight onPress={() => showDetails(data)}>
                <View><Row {...data} /></View>
                </TouchableHighlight>}
            />
            
          </View>
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
    toggleModal: () => dispatch(toggleModal()),
    setSelectedItem: (item) => dispatch(setSelectedItem(item)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
