import React from 'react'
import { TouchableOpacity, StyleSheet, Picker, Image, FlatList, View, StatusBar, Keyboard} from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, Content, Form, Card, CardItem, Body, Spinner, Fab} from 'native-base';

import { connect } from 'react-redux'
import { fetchData, setSearch, setCategory, setSuggestion} from '../actions'
import styles from '../../styles/app'
import DetailedView from './DetailedView'
import ResultList from './ResultList'
import CategoryPicker from './CategoryPicker'
import Suggestions from './Suggestions'

const SearchBar = (props) => {
  return (
      <Form style={{backgroundColor: '#2C3E50', padding: 5}}>
        <Item style={{borderBottomWidth: 0, marginLeft:0}}>
          <Input placeholder=""
            placeholderTextColor="#2C3E50"
            selectionColor="#000" 
            style={{backgroundColor:'#ECF0F1'}}
            onChangeText={(text) => props.setSearch(text)}
            value={props.appData.searchingFor} />
           <Button transparent onPress={() => props.fetchData()}>
            <Icon name="ios-search" style={{color: '#ECF0F1'}}/>
          </Button>
        </Item>
        {
        props.appData.suggestions && props.appData.suggestions.length > 0 && 
          <Suggestions {...props}/>
        }
        <CategoryPicker {...props}/>
      </Form>
  )
}

export default SearchBar
