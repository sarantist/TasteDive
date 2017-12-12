import React from 'react'
import { View, Text, TextInput, Image, FlatList, TouchableHighlight } from 'react-native'
import styles from '../../styles/app'

const ListView = (props) => {
  // Navigates to detailed view
  function showDetails(data) {
    props.navigation.navigate("DetailedView", data);
  }
  
  return (
    <FlatList 
      data={props.appData.data}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => 
      <TouchableHighlight onPress={() => showDetails(item)}>
        <View style={styles.listItem}>
          <Image
            style={styles.listItemThumb}
            source={{uri: 'https://img.youtube.com/vi/'+ item.yID +'/0.jpg'}}
          />
          <View style={styles.listItemTextContainer}>
            <Text style={styles.listTextTitle}>
              {item.Name}
            </Text>
            <Text style={styles.listText}>
              {item.Type}
            </Text>
          </View>
        </View>
      </TouchableHighlight>}
    />
  )
}

export default ListView;