import React from "react";
import { View,Dimensions, } from 'react-native';
import LottieView from 'lottie-react-native';
import { connect } from "react-redux";
import {socket} from './New_Join_Game';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        room: state.roomReducer.roomPin,
    }
}

class CountDown_StartPlay extends React.Component {
    static navigationOptions = {
        title: 'CountDown_StartPlay',
    };
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.route.params);
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
                <LottieView
                style={{
                    height: width*0.8029,//330w
                    width:  width*0.8029,//330w
                    alignSelf: 'center',
                    }}
                    source={require('../../assets/countdown_startgame.json')}
                    autoPlay
                    loop={false}
                    // speed={0.5}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!');
                        
                        this.props.navigation.replace('Play_Game', this.props.route.params);
                    }}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps)(CountDown_StartPlay);