import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, 
    ImageBackground, Alert, Modal, Image, ScrollView, TouchableOpacity } from 'react-native';
import { IconButton, Colors, Button } from 'react-native-paper';
import ListCard from '../Components/Player/ListCard';
import ModalCard from '../Components/Player/ModalCard';
import Icon from 'react-native-vector-icons/Ionicons';
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
        const { modalVisible } = this.state;
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/back2.png")}
                    style={styles.image}>
                    <View style={styles.header}>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate("New_Join_Game")}>
                            <Image source={require("../images/17.png")} style={styles.imageBack} />
                        </TouchableOpacity>

                        <MenuButton avatarURL={this.props.user.photo} style={styles.menuAvatar}></MenuButton>
                    </View>
                    <View style={styles.headerContent}>
                        <Text
                            style={{
                                fontSize: 70,
                                color: "#FFF",
                                fontWeight: 'bold'
                            }}>
                            LOBBY
                        </Text>
                        <View style={{flexDirection: "row",}}>
                        <Text
                            style={{
                                fontSize: 30,
                                color: "#FFF",
                            }}>
                            Game ID is 
                        </Text>
                        <Text
                            style={{

                                fontSize: 30,
                                color: "#FFF",
                            }}>
                            _
                        </Text>
                        <Text
                            style={{
                                fontSize: 30,
                                color: "#f2c026",
                                fontWeight: 'bold'
                            }}>
                            {this.props.room.roomPin}
                        </Text>
                        </View>
                        
                        <Text
                            style={{
                                fontSize: 25,
                                color: "#b1a7b9",
                            }}>
                            {this.state.userInLobby.length}/10 player
                    </Text>
                    </View>

                    <View
                        style={styles.Icon}>
                        <Icon name="ios-person" size={height * 0.04} color="#5454bd" />
                        <Icon name="ios-checkmark-circle" size={height * 0.04} color="#5454bd" />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{
                            marginVertical: 5,
                        }}
                    >
                        {/* <ListCard
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        /> */}
                        {
                            this.state.userInLobby.map((item, index) => (
                                <ListCard key={index} you = {this.props.user.id} item = {item}>

                                </ListCard>))
                        }
                        <View>
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
                        </View>
                    </ScrollView>
                    <Button
                        color="#5454bd"
                        icon={require('../images/finish.png')}
                        mode="contained"
                        onPress={() => navigate(
                            'Play_Game'
                        )}>
                        <Text style={{ color: '#FFF', fontSize: height * 0.035, }}>
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
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    header: {
        flexDirection: "row", paddingHorizontal: width * 0.08,
        paddingVertical: height * 0.03, justifyContent: "space-between",
        alignItems: "center",
    },

    imageBack: {
        tintColor: "#fff",
        width: width * 0.06,
        height: height * 0.03
    },
    menuAvatar: {
        flex: 1,
        height: height * 0.04,
        width: width * 0.07,
        borderRadius: 100
    },
    headerContent: {
        alignItems: "center",
    },
    Icon: {
        flex: 1,
        flexDirection: "row",
        marginTop: height * 0.103, justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: width * 0.1
    }
});