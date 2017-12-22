import React from 'react'
import { TouchableOpacity, FlatList, View} from 'react-native'
import { Text} from 'native-base';

const Suggestions = (props) => {
  return (
    <FlatList 
      data={props.appData.suggestions}
      keyboardShouldPersistTaps={'always'}
      style={{height:150, width:400, backgroundColor: 'white', zIndex:99999}}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => 
      <TouchableOpacity onPress={() => props.setSuggestion(item)}> 
        <View> 
          <Text>{item}</Text> 
        </View>
      </TouchableOpacity>}
    />
  )
}

export default Suggestions
