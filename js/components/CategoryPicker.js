import React from 'react'
import { Picker} from 'react-native'
import { setCategory} from '../actions'

const CategoryPicker = (props) => {
  return (
    <Picker
      style={{color: '#ECF0F1'}}
      mode="dropdown"
      selectedValue={props.appData.selectedCategory}
      onValueChange={(itemValue, itemIndex) => props.setCategory(itemValue)}>
      {/*<Picker.Item label="Everything" value="everything"/>*/}
      <Picker.Item label="Movies" value="movies"/>
      <Picker.Item label="Shows" value="shows"/>
      <Picker.Item label="Music" value="music"/>
      <Picker.Item label="Games" value="games"/>
    </Picker>
  )
}

export default CategoryPicker;