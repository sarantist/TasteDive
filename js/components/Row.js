import React from 'react'
import { View, Text, TextInput, Image} from 'react-native'
import styles from '../../styles/app'

const Row = (data) => {
  return (
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
  )
}

export default Row;