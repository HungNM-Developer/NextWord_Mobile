import React from "react";
import { View,Dimensions,Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { fetchRoomPin } from '../redux/action/RoomAction';
import { connect } from "react-redux";
import io from 'socket.io-client';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


class Waiting_Rank extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Waiting_Rank',
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../images/logo-small.png')}
                style={[styles.icon]}
            />

    })
    // static navigationOptions = {
    //     title: 'Waiting_Rank',
    // };
    

      
    render() {
        //const { navigate, state } = this.props.navigation;
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
                    color: '#ffd700',
                    fontWeight:'bold',
                    fontSize:width*0.08516,//35w
                    alignSelf: 'center',}}>Waiting Rank...</Text>
                <LottieView
                style={{
                    height: width*0.73,//330w
                    width:  width*0.73,//330w
                    alignSelf: 'center',
                    }}
                    source={require('../../assets/loading_rank5.json')}
                    autoPlay
                    loop={false}
                    speed={1.0}
                    onAnimationFinish={() => {
                        //console.log('Animation Finished!')
                        this.props.navigation.navigate('Rank_Game', this.props.route.params);
                    }}
                />
            </View>
        )
    }
}

export default Waiting_Rank;