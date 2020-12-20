import React, { useState } from "react";
import {
    View, Text, Alert, Modal, Image, TextInput,
    ImageBackground, Dimensions, StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity, TouchableHighlight } from "react-native-gesture-handler";
import { IconButton, Colors, Button, } from 'react-native-paper';
import MenuButton from '../Components/MenuButton';
import * as Animatable from 'react-native-animatable';
import { socket } from './New_Join_Game';
import { connect } from "react-redux";
import { joinRoom } from '../redux/action/RoomAction';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        //room: state.roomReducer.roomPin
    }
};

const mapDispatchToProps = dispatch => ({
    joinRoom: (roomPin) => dispatch(joinRoom({roomPin: roomPin}))
  });

class Join_Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    joinClick() {
        // console.log("check " + this.state.value);
        this.props.joinRoom(this.state.value);
        socket.emit('joinRoom', this.state.value, this.props.user);
        this.props.navigation.navigate('Player');

    }
    static navigationOptions = {
        title: 'Join_Game',
    };

    render() {
        const { navigate, state } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/join9.png")}
                    style={styles.image}>
                    <View style={{
                        flex: 2,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        paddingTop: height * 0.0585,//40h 
                        paddingRight: width * 0.073,//30w
                    }}>

                        <MenuButton avatarURL={this.props.user.photo}
                        navigation={this.props.navigation}></MenuButton>
                    </View>

                    <View style={styles.headerContent}
                    animation="fadeInDown" duration={2000} delay={1000}>
                        <Text
                            style={styles.TextheaderContent}>
                            Join Game
                         </Text>
                    </View>

                    <View style={styles.Content}
                    animation="fadeInUp" duration={2000} delay={1000}>
                        <View
                            style={styles.ViewContent}>
                            <Image
                                source={require("../images/search.png")}
                                style={{ height: height * 0.022, width: width * 0.036 }}
                            />
                            <TextInput
                                onChangeText={(value) => this.setState({ value })}
                                placeholder="Enter Game ID"
                                style={styles.TextInputContent}
                            />
                        </View>
                        <Button
                            onPress={() => this.joinClick()}
                            labelStyle={styles.titleStyle}
                            style={styles.buttonStyle}
                            type="outline">
                            Join
                        </Button>
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            justifyContent: "center", marginTop: height * 0.065,//45h
                        }}>
                            <Button
                                onPress={() => navigate(
                                    'New_Join_Game')}
                                style={styles.buttonStyleBack}
                                mode="outlined">
                                <Icon name="ios-arrow-back" size={height * 0.043//30h
                                } color="#ffff" />
                            </Button>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Join_Game);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    Avatar: {
        height: height * 0.058,//40h
        width: width * 0.097,//40w
        borderRadius: 30,
        marginTop: height * 0.029,//20h
        marginLeft: width * 0.778,//320w
    },

    menuAvatar: {
        height: height * 0.058,//40h
        width: width * 0.097,//40w
        borderRadius: 30,
    },
    headerContent: {
        flex: 1,
        alignItems: "center",
    },
    TextheaderContent: {
        fontSize: height * 0.087,//60h
        color: "#522289",
        fontWeight: 'bold'
    },
    Content: {
        paddingHorizontal: width * 0.048,//20w
        flex: 5,
        marginTop: height * 0.109,//75h
    },
    ViewContent: {
        elevation: 10,
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderRadius: 60,
        alignItems: "center",
        paddingVertical: height * 0.014,//10h
        paddingHorizontal: width * 0.048,//20w
    },
    TextInputContent: {
        paddingHorizontal: width * 0.072,//30w
        fontSize: width * 0.06,//25
        color: "#522289",
        fontWeight: 'bold',
    },

    buttonStyleBack: {
        width: width * 0.2433,
        borderRadius: 50,
        padding: height * 0.008,
        marginVertical: height * 0.029,//20h
        borderWidth: width * 0.006,
        borderColor: '#ffffff',
    },
    buttonStyle: {
        borderRadius: 50,
        backgroundColor: "#fff",
        padding: height * 0.014,
        marginVertical: height * 0.029,//20h
        elevation: 10,
    },
    titleStyle: {
        fontSize: width * 0.06,//25
        color: "#4b3ca7",
    },
});