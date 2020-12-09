import React from "react";
import { View,Dimensions,Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { fetchRoomPin } from '../redux/action/RoomAction';
import { connect } from "react-redux";
import io from 'socket.io-client';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const mapDispatchToProps = dispatch => ({
    fetchRoomPin: () => dispatch(fetchRoomPin())
  });
import { socket } from './New_Join_Game';

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        room: state.roomReducer.roomPin,
    }
}

class Creating_Game extends React.Component {
    static navigationOptions = {
        title: 'CountDown_StartPlay',
    };
    constructor(props) {
        super();
    }
    async createRoom(navigate) {
        await this.props.fetchRoomPin();
        //console.log("check" + this.props.room.roomPin);
        socket.emit('joinRoom', this.props.room.roomPin, this.props.user);
        navigate('Player');
      }
    render() {
        const { navigate, state } = this.props.navigation;
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#5453bb',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Text style={{
                    color: '#ffffff',
                    fontWeight:'bold',
                    fontSize:width*0.08516,//35w
                    alignSelf: 'center',}}>Creating Game...</Text>
                <LottieView
                style={{
                    height: width*0.8029,//330w
                    width:  width*0.8029,//330w
                    alignSelf: 'center',
                    }}
                    source={require('../../assets/creatinggame1.json')}
                    autoPlay
                    loop={false}
                    speed={0.5}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.createRoom(navigate);
                    }}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Creating_Game);