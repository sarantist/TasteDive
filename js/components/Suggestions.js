import React from 'react'
import { TouchableOpacity, FlatList, View} from 'react-native'
import { Text} from 'native-base';

const Suggestions = (props) => {
  return (
    <FlatList 
      data={props.appData.suggestions}
      keyboardShouldPersistTaps={'always'}
      style={{maxHeight:150, alignSelf: 'stretch', backgroundColor: '#ECF0F1'}}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => 
      <TouchableOpacity onPress={() => props.setSuggestion(item)}> 
        <View> 
          <Text style={{padding: 10, fontSize: 15}}>{item}</Text> 
        </View>
      </TouchableOpacity>}
    />
  )
}

export default Suggestions
