import React from 'react'
import { Text, Image, Linking, ScrollView, TouchableOpacity, View } from 'react-native'
import Dimensions from 'Dimensions';
import styles from '../../styles/app'

const win = Dimensions.get('window');
const DetailedView = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => Linking.openURL(props.navigation.state.params.yUrl)}>
        <Image
          style={{height: 300, width: win.width}}
          source={{uri: 'https://img.youtube.com/vi/'+ props.navigation.state.params.yID +'/0.jpg'}}
          resizeMode="cover"
        />
        <Image
          style={styles.playIcon}
          source={require('../../styles/play-button.png')}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={{padding: 15, fontSize: 15}}>{props.navigation.state.params.wTeaser} </Text>
      <Text style={{color: 'blue', padding: 10}}
        onPress={() => Linking.openURL(props.navigation.state.params.wUrl)}>
        Wikipedia
      </Text>
    </View>
  )
}

export default DetailedView;