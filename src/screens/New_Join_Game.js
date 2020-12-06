import React from "react";
import { StyleSheet, Dimensions, View, Text, Alert, Modal, Image, ImageBackground, ActivityIndicator } from "react-native";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, Colors, Button } from 'react-native-paper';
import { LoadingComponent } from '../Components/LoadingComponent';
import { baseURL } from '../shared/baseURL';
import { fetchRoomPin } from '../redux/action/RoomAction';
import { connect } from "react-redux";
import io from 'socket.io-client';
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
// class Button_Create extends React.Component {
//   render() {
//     <Button style={{
//       borderRadius: 30, padding: 5,
//       backgroundColor: '#fff',
//     }}
//       color="#fff"
//       mode="contained"
//       onPress={() => this.props.fetchRoomPin()}>
//        <Text style={{ color: '#4b3ca7', fontSize: 25, }}>Create Name</Text>
//     </Button>
//     if (!this.props.isLoading) {
//       return <Text style={{ color: '#4b3ca7', fontSize: 25, }}>
//       Create Game
//     </Text>
//     }
//     else {
//       return <LoadingComponent></LoadingComponent>;
//     }
//   }
// }
var socket;
class New_Join_Game extends React.Component {


  static navigationOptions = {
    title: 'New_Join_Game',
  };

  async createRoom(navigate) {
    await this.props.fetchRoomPin();
    //console.log("check" + this.props.room.roomPin);
    socket = io(baseURL);
    socket.emit('joinRoom', this.props.room.roomPin, this.props.user);
    navigate('Player');
  }

  render() {
    console.log('height' + height)
    console.log('width' + width)
    // console.log(this.props);
    const { navigate, state } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/newjoin.png")}
          style={styles.image}
        >
          <View style={{ flex: 1 }}>
            <Image
              source={require("../images/Layer1.png")}
              style={{
                width: width * 0.121,//50w
                height: height * 0.073,//50h
                borderRadius: 30,
                marginTop: height * 0.029,//20h
                marginLeft: width * 0.778,//320w 
              }}
            />
          </View>
          <View style={styles.containerImage}>
            <Image
              source={require("../images/logo1.png")}
              style={styles.stretch}
            />
          </View>

          <View style={styles.containerBtn}>
            <Button onPress={() => this.createRoom(navigate)}
              labelStyle={styles.titleStyle}
              style={styles.buttonStyle}
              type="outline">
              Create Game
          </Button>
            <Button labelStyle={styles.titleStyle}
              style={styles.buttonStyle}
              type="outline"
              onPress={() => navigate(
                'Join_Game'
              )}>
              <Text style={{
                color: '#4b3ca7', fontSize: width * 0.06,//25w
              }}>
                Join Game
            </Text>
            </Button>
            <TouchableOpacity onPress={() => navigate(
                'Rank_Game'
              )}>
            <Text
              style={styles.titleText}>
              How To Play
          </Text>
            </TouchableOpacity>
            
          </View>



        </ImageBackground>
      </View>



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
    height: height * 0.336,//230 
    width: width * 0.559,//230 
    backgroundColor: "#fff",
    borderRadius: 200,
  },

  containerBtn: {
    flex: 3,
    marginTop: height * 0.117,//80h
  },
  buttonStyle: {
    borderRadius: 40,
    backgroundColor: "#fff",
    paddingVertical: height * 0.007,//5h
    marginVertical: height * 0.0219,//15h
    marginHorizontal: width * 0.0608,//25w
    elevation:10,
  },
  titleStyle: {
    fontSize: width * 0.06,//25w
    color: "#4b3ca7",
  },

  titleText: {
    textAlign: "center",
    fontSize: width * 0.06,//25w
    color: "#b1a7b9",
    marginTop: height * 0.0439,//30h
  }

});
