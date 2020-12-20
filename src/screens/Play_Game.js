import React from "react";
import {
    View, Alert, Modal, StyleSheet,
    Image, ImageBackground, Dimensions,
    TextInput, ScrollView, TouchableHighlight
    , TouchableOpacity,
} from "react-native";
import Modal_Word_List_Used from '../Components/playGame/Modal_Word_List_Used';
import { Menu, Provider, Button, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, ListItem, Input, Text, Divider } from 'react-native-elements';

import * as Animatable from 'react-native-animatable';

//component
import MenuButton from '../Components/MenuButton';
import ListCard_PlayGame from '../Components/playGame/ListCard_PlayGame';
import ListCard from '../Components/Player/ListCard';
import ModalCard from '../Components/Player/ModalCard';
import TimeComponent from '../Components/playGame/TimeComponent';
import { connect } from "react-redux";
import { socket } from "./New_Join_Game";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        room: state.roomReducer.roomPin
    }
}

class Play_Game extends React.Component {
    user = this.props.route.params.userInLobby;

    constructor(props) {
        super(props);
        this.state = {
            valueInput: '',
            usersLeft: this.user,
            modalVisible: false,
            wordStore: [],
        }


    }
    // componentDidMount(){
    //     const userCount = this.props.route.params;
    //     this.setState({userCount: userCount})
    // }
    submitAnswer() {
        this.setState({
            valueInput: '',
        })
        socket.emit("wordAnswer", { roomPin: this.props.room.roomPin, word: this.state.valueInput });
    };
    static navigationOptions = {
        title: 'Play_Game',
    };
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };
    componentDidMount() {
        //console.log(this.props.route.params);
        socket.on("usersLive", msg => {
            console.log(msg);
            if(msg.length <= 1)
            {
                console.log("chuyen trang");
                this.props.navigation.navigate('Rank_Game');          
            }
            else
            {
                this.setState({
                usersLeft: msg
            })
            }
        })
        socket.on("wordStore", msg => {
            //console.log(msg);
            this.setState({
                wordStore: msg
            });
        });
        socket.on("turnUser", msg => {
            //console.log(msg);
        })
    }
    render() {
        //console.log(this.user)
        const { modalVisible } = this.state;

        const { navigate, state } = this.props.navigation;
        //const userTotal = this.props.route.params.userCount;
        let y = (height * 0.014 * 2) + (height * 0.04) + (height * 0.03);
        //console.log(y);
        return (

            <Animatable.View style={styles.container}>
                <ImageBackground
                    source={require("../images/play4.png")}
                    style={styles.image}>
                    <View style={styles.header}>
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            alignItems: "center",
                            //marginTop: height*0.0292,
                        }}

                            onPress={() => { this.scroll.scrollTo({ y: y }); y = y * 2 }}>

                            <Icon name="chevron-left" size={width * 0.1094//45w
                            } color="#ffffff"
                            />

                        </TouchableOpacity>
                        <Text style={{
                            fontSize: width * 0.0608,//25w
                            // color: "#1abc9c",
                            color: "#f2c026",
                            fontWeight: "bold",
                        }}>{this.state.usersLeft.length}/{this.user.length} Players
                            </Text>

                        <MenuButton avatarURL={this.props.user.photo}
                            navigation={this.props.navigation}></MenuButton>
                    </View>

                    <View style={styles.NextWord}>

                        <TimeComponent></TimeComponent>
                        <View >
                            <Divider style={{
                                backgroundColor: "#5454bd",
                                elevation: 1,
                                width: width * 0.1379 //180w
                            }} />
                        </View>

                        <Text style={styles.textNextWord}>
                            {this.state.wordStore[this.state.wordStore.length - 1]}
                        </Text>

                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{
                            marginVertical: 5,
                        }}
                        ref={(node) => this.scroll = node}

                    >
                        {
                            this.state.usersLeft.map((item, index) => (
                                <ListCard key={index} you={this.props.user.id} item={item}>

                                </ListCard>))
                        }
                    </ScrollView>


                    <View style={styles.InputSubmit}>

                        <TextInput
                            onChangeText={(value) => this.setState({ valueInput: value })}
                            placeholder="Enter Word"
                            value={this.state.valueInput}
                            style={styles.TextInputContent}
                        />
                        <TouchableOpacity onPress={() => this.submitAnswer()}>
                            <Image
                                style={{
                                    height: width * 0.0729, //30w
                                    width: width * 0.0729,
                                    tintColor: '#6777ef'
                                }}
                                source={require('../images/enter.png')}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{}}>
                        <Button
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                            labelStyle={styles.titleStyle}
                            style={styles.buttonStyle}
                            type="outline">
                            word list used
                        </Button>
                        <View>

                            <Modal_Word_List_Used
                                data={this.state.wordStore}
                                visible={modalVisible}
                                onPress={() => {
                                    this.setModalVisible(!modalVisible);
                                }}
                            />

                        </View>


                    </View>
                </ImageBackground>
            </Animatable.View>

        );
    }
}

export default connect(mapStateToProps)(Play_Game);

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
        flexDirection: "row",
        paddingHorizontal: width * 0.073,//30w
        marginTop: height * 0.0585,//40h 
        marginBottom: height * 0.01464,//10h
        justifyContent: "space-between",
        alignItems: "center",
    },

    imageBack: {
        tintColor: "#ffffff",
        width: width * 0.0729,//30w
        height: height * 0.0292,//20h
    },

    // menuAvatar: {
    //     flex: 1,
    //     height: height * 0.04,
    //     width: width * 0.07,
    //     borderRadius: 100
    // },
    headerContent: {
        alignItems: "center",
    },
    Icon: {
        flex: 1,
        flexDirection: "row",
        marginTop: height * 0.103, justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: width * 0.1
    },
    buttonStyle: {
        marginVertical: height * 0.02196,//15h
        width: width * 0.8,
        paddingVertical: 5,
        borderRadius: 30,
        elevation: 10,
        backgroundColor: "#fff",
        alignSelf: "center",
    },
    titleStyle: {
        fontSize: height * 0.035,
        color: "#4b3ca7",
    },
    TextInputContent: {
        fontSize: width * 0.055,
        color: "#522289",
        fontWeight: 'bold',
    },
    textNextWord: {
        color: '#5454bd',
        fontSize: width * 0.1338,
        fontWeight: 'bold',
    },
    ViewContent: {
        marginBottom: height * 0.08,
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderRadius: 60,
        alignItems: "center",
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: "center",
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
        elevation: 10,
    },
    InputSubmit: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: width * 0.1,
        justifyContent: 'space-around',
        marginBottom: 0,
        alignSelf: "center",
        backgroundColor: "#ffffff",
        height: height * 0.1,
        width: width * 0.8,
        borderRadius: 30,
        elevation: 10,
    },
    NextWord: {
        marginTop: height * 0.02928,//20h
        flexDirection: "column",
        paddingVertical: height * 0.02928,//20h
        alignItems: "center",
        justifyContent: 'space-around',
        // marginBottom: 20,
        alignSelf: "center",
        backgroundColor: "#ffffff",
        height: height * 0.3441,
        width: width * 0.73,
        borderRadius: 50,
        elevation: 10,
    }
});