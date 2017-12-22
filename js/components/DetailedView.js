import React from 'react'
import Dimensions from 'Dimensions';
import { BackHandler, ScrollView, Linking, PixelRatio } from 'react-native'
import { Container, Header, Icon, Button, Text, Content, View, CardItem, Body, Right, Left, Card, Title } from 'native-base';
import styles from '../../styles/app'
import { NavigationActions } from 'react-navigation'
import YouTube, { YouTubeStandaloneAndroid } from 'react-native-youtube';

const win = Dimensions.get('window');
const backAction = NavigationActions.back();

export default class DetailedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      data: props.navigation.state.params,
      playerHeight:PixelRatio.roundToNearestPixel(win.width/(16/9))
    };
  
    BackHandler.addEventListener('hardwareBackPress', function() {
      props.navigation.dispatch(backAction);
      return true;
    });
  }
  
  // There is a known problem with react-native-youtube that doesnt allow controlls to display properly
  // https://github.com/inProgress-team/react-native-youtube/issues/131
  youtubeReady() {
    // Changing the height of component solves the controls issue
    setTimeout(() => this.setState({ playerHeight: PixelRatio.roundToNearestPixel(win.width/(16/9)) + 1 }), 200);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.state.navigation.dispatch(backAction)}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.data.Name}</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <YouTube
            ref={component => {
              this._youTubeRef = component;
            }}
            apiKey="AIzaSyCge8NmXEKxhse1o8oBxJG-D_nZY2x7Dxg"
            videoId={this.state.data.yID}
            controls={1}
            onReady={(e)=> this.youtubeReady()}
            fullscreen={false}
            style={{ height:this.state.playerHeight, alignSelf: 'stretch'}}
          />
          <Card>
            <CardItem>
              <Body>
                <Text>{this.state.data.wTeaser} </Text>
                <Text style={{color: 'blue'}}
                  onPress={() => Linking.openURL(this.state.data.wUrl)}>
                  Wikipedia
                </Text>
              </Body>
            </CardItem>
          </Card>
        </ScrollView>
      </Container>
    )
  }
}
