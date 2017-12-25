import React from 'react'
import { View } from 'react-native'
import { Text } from 'native-base';

const NoResultsText = (props) => {
  return (
    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
     <Text> Sorry! No results found</Text>
    </View>
  )
}

export default NoResultsText
