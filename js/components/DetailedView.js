import React from 'react'
import { Text, Modal, Image, Linking, ScrollView, TouchableOpacity } from 'react-native'
import Dimensions from 'Dimensions';
import styles from '../../styles/app'

const win = Dimensions.get('window');
const DetailedView = (props) => {
  return (
    <Modal
    transparent={false}
    visible={props.appData.modalVisible}
    onRequestClose={() => {props.toggleModal()}}>
    {
      props.appData.selectedItem ? (
        <ScrollView>
          <TouchableOpacity onPress={() => Linking.openURL(props.appData.selectedItem.yUrl)}>
            <Image
              style={{height: 300, width: win.width}}
              source={{uri: 'https://img.youtube.com/vi/'+ props.appData.selectedItem.yID +'/0.jpg'}}
              resizeMode="cover"
            />
            <Image
              style={styles.playIcon}
              source={require('../../styles/play-button.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={{padding: 15, fontSize: 15}}>{props.appData.selectedItem.wTeaser} </Text>
          <Text style={{color: 'blue', padding: 10}}
            onPress={() => Linking.openURL(props.appData.selectedItem.wUrl)}>
            Wikipedia
          </Text>
        </ScrollView>
      ) : null
    }
    </Modal>
  )
}

export default DetailedView;