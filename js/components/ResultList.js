import React from 'react'
import { FlatList, TouchableWithoutFeedback } from 'react-native'
import { Text, Content, CardItem, Thumbnail, Body, Left, Card } from 'native-base';
import styles from '../../styles/app'

const ListView = (props) => {
  return (
    <FlatList 
      data={props.appData.data}
      keyExtractor={(item, index) => index}
      renderItem={({item}) =>
      <TouchableWithoutFeedback 
        onPress={() => props.navigation.navigate("DetailedView", item)}>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://img.youtube.com/vi/'+ item.yID +'/0.jpg'}}/>
            <Body>
              <Text>{item.Name}</Text>
              <Text note>{item.Type}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Text numberOfLines={5} ellipsizeMode='tail'>
            {item.wTeaser}
          </Text>
        </CardItem>
      </Card>
      </TouchableWithoutFeedback>}
    />
  )
}

export default ListView;