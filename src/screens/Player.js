import React, { Component } from 'react';
import {
    Dimensions, View, Text, StyleSheet,
    ImageBackground, Alert, Modal, Image, ScrollView, TouchableOpacity
} from 'react-native';
import { IconButton, Colors, Button } from 'react-native-paper';
import ListCard from '../Components/Player/ListCard';
import ModalCard from '../Components/Player/ModalCard';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuButton from '../Components/MenuButton';
import { connect } from 'react-redux';
import io from "socket.io-client";
import { baseURL } from '../shared/baseURL';
import { socket } from './New_Join_Game';
const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        room: state.roomReducer.roomPin,
    }
}
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInLobby: [],

        }
    }
    startClick(){
        socket.emit('startPress', this.props.room.roomPin);
        this.props.navigation.navigate('Play_Game');
    }
    static navigationOptions = {
        title: 'Player',
    };
    state = {
        modalVisible: false,
    };
    componentDidMount() {
        socket.on('userInLobby', msg => {
            //console.info(msg);
            //msg is array user
            this.setState({
                userInLobby: msg,
            })
        });
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: false });
    };

    render() {
        console.log("user-player" + this.props.user.photo);
        const { navigate } = this.props.navigation;
        // const { modalVisible } = this.state;
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/back2.png")}
                    style={styles.image}>
                    <View style={styles.header}>
                    <TouchableOpacity style={{
                            flexDirection: "row",
                            alignItems: "center",
                         }}
                            onPress={() => this.props.navigation.navigate("New_Join_Game")}>
                            {/* <Image source={require("../images/17.png")} style={styles.imageBack} /> */}
                            <Icon name="chevron-left" size={width*0.1094//45w
                            } color="#ffffff" 
                            />
                            {/* <Text style={{
                                color:'#ffffff',
                                fontSize:width * 0.0486, 
                                fontWeight:'bold'
                                }}>
                                Back
                            </Text> */}
                        </TouchableOpacity>

                        <MenuButton avatarURL={this.props.user.photo} style={styles.menuAvatar}></MenuButton>

                    </View>
                    <View style={styles.headerContent}>
                        <Text
                            style={{
                                fontSize: width * 0.1459,//60w
                                color: "#FFF",
                                fontWeight: 'bold'
                            }}>
                            LOBBY
                        </Text>
                        <View style={{ flexDirection: "row", }}>
                            <Text
                                style={{
                                    fontSize: width * 0.0973,//40w
                                    color: "#FFF",
                                }}>
                                Game ID is
                        </Text>
                            <Text
                                style={{

                                    fontSize: width * 0.0973,//40w
                                    color: "#FFF",
                                }}>
                                _
                        </Text>
                            <Text
                                style={{
                                    fontSize: width * 0.0973,//40w
                                    color: "#f2c026",
                                    fontWeight: 'bold'
                                }}>
                                {this.props.room.roomPin}
                            </Text>
                        </View>

                        <Text
                            style={{
                                fontSize: width * 0.0608,
                                color: "#b1a7b9",
                            }}>
                            {this.state.userInLobby.length}/10 player
                        </Text>
                    </View>

                    <View
                        style={styles.Icon}>
                        <Icon name="account-circle" size={height * 0.0366} color="#5454bd" />
                        <Icon name="check-circle" size={height * 0.0366} color="#5454bd" />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{
                            marginVertical: 5,
                        }}
                    >

                        {
                            this.state.userInLobby.map((item, index) => (
                                <ListCard key={index} you={this.props.user.id} item={item}>

                                </ListCard>))
                        }
                        {/* <View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert("Modal is closed");
                                }}
                            >
                                <ModalCard
                                    onPress={() => {
                                        this.setModalVisible(!modalVisible);
                                    }}
                                />
                            </Modal>
                        </View> */}
                    </ScrollView>
                    <Button
                        color="#5454bd"
                        icon={require('../images/finish.png')}
                        mode="contained"
                        onPress={() => this.startClick()}>
                        <Text style={{ color: '#FFF', fontSize: width * 0.0608, }}>
                            Start
                        </Text>
                    </Button>
                </ImageBackground>

            </View>
        );
    }
}

export default connect(mapStateToProps)(Player);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: "column"
    },
    image: {
      width:"100%",
      height:"100%"
    },
    header: {
        flexDirection: "row",
        paddingHorizontal: width * 0.0729,
        marginVertical: height * 0.029,//20h 
        justifyContent: "space-between",
        alignItems: "center",
    },

    imageBack: {
        tintColor: "#fff",
        width: width * 0.0729,//30w
        height: height * 0.0292,//20h
    },
    menuAvatar: {
        flex: 1,
        width: width * 0.121,//50w
        height: height * 0.073,//50h
        borderRadius: 100
    },
    headerContent: {
        alignItems: "center",
    },
    Icon: {
        
        flexDirection: "row",
        marginTop: height*0.09,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: width * 0.0973
    }
});