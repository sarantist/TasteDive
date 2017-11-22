
import {
  StyleSheet
} from 'react-native';

 const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    padding: 10
  },
  text: {
    textAlign: 'center'
  },
  searchButton: {
    height: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  },
  listItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
  listItemTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  listText: {
    marginLeft: 12,
    fontSize: 16,
  },
  listTextTitle: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: 'bold'
  },
  list_category: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  listItemThumb: {
    borderRadius: 20,
    width: 50, 
    height: 50
  },
  playIcon: {
    position: 'absolute',
    opacity: 0.5,
    height: 100, 
    width: 100,
    left: 150,
    bottom: 100
  }
});

export default styles;