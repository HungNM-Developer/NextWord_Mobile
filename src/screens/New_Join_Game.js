import React from "react";
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Dimensions, View, Text, Alert,
         Modal, Image, ImageBackground, ActivityIndicator } from "react-native";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Modal_HowToPlay from '../Components/New_Join_Game/Modal_HowToPlay';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, Colors, Button } from 'react-native-paper';
import { LoadingComponent } from '../Components/LoadingComponent';
import { baseURL } from '../shared/baseURL';
import { fetchRoomPin } from '../redux/action/RoomAction';
import { connect } from "react-redux";
import io from 'socket.io-client';
import MenuButton from "../Components/MenuButton";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const mapDispatchToProps = dispatch => ({
  fetchRoomPin: () => dispatch(fetchRoomPin())
});
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    room: state.roomReducer.roomPin
  }
};

var socket;
class New_Join_Game extends React.Component {
  constructor(props)
  {
      super(props);
      this.state = {
          modalVisible: false,         
      }
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  static navigationOptions = {
    title: 'New_Join_Game',
  };

  async createRoom(navigate) {
    await this.props.fetchRoomPin();
    //console.log("check" + this.props.room.roomPin);
    socket.emit('joinRoom', this.props.room.roomPin, this.props.user);
    navigate('Creating_Game');
  }
  componentDidMount() {
    socket = io(baseURL);
  }
  render() {
    const { modalVisible } = this.state;
    console.log('height' + height)
    console.log('width' + width)
    // console.log(this.props);
    const { navigate, state } = this.props.navigation;
    return (
      <Animatable.View style={styles.container}
        animation="fadeIn" duration={2000} delay={1000}>
        <ImageBackground
          source={require("../images/newjoin.png")}
          style={styles.image}
        >
          <View style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingTop: height * 0.0585,//40h 
            paddingRight: width * 0.073,//30w
          }}>

            <MenuButton avatarURL={this.props.user.photo}
              navigation={this.props.navigation}></MenuButton>
          </View>

          <Animatable.View style={styles.containerImage}
            animation="slideInDown" duration={2000} delay={1000}>
            <Image
              source={require("../images/logo1.png")}
              style={styles.stretch}
            />

          </Animatable.View>


          <View style={styles.containerBtn}>
            <Animatable.View
              animation="slideInRight" duration={2000} delay={1000}>
              <Button onPress={() => this.createRoom(navigate)}
                labelStyle={styles.titleStyle}
                style={styles.buttonStyle}
                type="outline">
                Create Game
            </Button>
            </Animatable.View>
            <Animatable.View
              animation="slideInLeft" duration={2000} delay={1000}>
              <Button labelStyle={styles.titleStyle}
                style={styles.buttonStyle}
                type="outline"
                onPress={() => navigate(
                  'Join_Game'
                )}>
                <Text style={{
                  color: '#4b3ca7', fontSize: width * 0.06083,//25w
                }}>
                  Join Game
            </Text>
              </Button>
            </Animatable.View>
            <Animatable.View
              animation="slideInUp" duration={2000} delay={1300}>
              {/* <TouchableOpacity onPress={() => navigate(
                'Rank_Game'
              )}>
                <Text
                  style={styles.titleText}>
                  How To Play
              </Text>
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => {
                this.setModalVisible(true);
              }}>
                <Text
                  style={styles.titleText}>
                  How To Play
                </Text>
              </TouchableOpacity>
              <View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal is closed");
                  }}
                >
                  <Modal_HowToPlay
                  navigation={this.props.navigation}
                    onPress={() => {
                      
                      this.setModalVisible(!modalVisible);
                    }}
                  />
                </Modal>
              </View>
            </Animatable.View>

          </View>
        </ImageBackground>
      </Animatable.View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(New_Join_Game);
export { socket };

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignContent: 'center',
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  containerImage: {
    flex: 2,
    alignItems: "center",
  },

  stretch: {
    height: width * 0.559,//230 
    width: width * 0.559,//230 
    backgroundColor: "#ffffff",
    borderRadius: 200,
  },

  containerBtn: {
    flex: 3,
    marginTop: height * 0.117,//80h
  },

  buttonStyle: {
    borderRadius: 50,
    backgroundColor: "#fff",
    paddingVertical: height * 0.007,//5h
    marginVertical: height * 0.0219,//15h
    marginHorizontal: width * 0.0608,//25w
    elevation: 10,
  },

  titleStyle: {
    fontSize: width * 0.06083,//25w
    color: "#4b3ca7",
  },

  titleText: {
    textAlign: "center",
    fontSize: width * 0.06083,//25w
    color: "#b1a7b9",
    marginTop: height * 0.0439,//30h
  },

});
