import React from 'react'
import { View, Text, TextInput, Image, ListView, TouchableHighlight} from 'react-native'
import styles from '../../styles/app'

const Row = (props) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  
  // Navigates to detailed view
  function showDetails(data) {
    //props.setSelectedItem(data)
    props.navigation.navigate("DetailedView", data);
  }

  return (
    <View style={{flex: 1}}>
      <ListView 
        dataSource={ds.cloneWithRows(props.appData.data)}
        renderRow={(data, sectionID, rowID) => 
        <TouchableHighlight onPress={() => showDetails(data)}>
          <View style={styles.listItem}>
            <Image
              style={styles.listItemThumb}
              source={{uri: 'https://img.youtube.com/vi/'+ data.yID +'/0.jpg'}}
            />
            <View style={styles.listItemTextContainer}>
              <Text style={styles.listTextTitle}>
                {data.Name}
              </Text>
              <Text style={styles.listText}>
                {data.Type}
              </Text>
            </View>
          </View>
        </TouchableHighlight>}
      />
    </View>
  )
}

export default Row;