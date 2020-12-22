import React from "react";
import {
    View, Alert, Modal, StyleSheet,
    Image, ImageBackground, Dimensions,
    TextInput, ScrollView, TouchableHighlight
    , TouchableOpacity,Animated,Keyboard
} from "react-native";
import Modal_Word_List_Used from '../Components/playGame/Modal_Word_List_Used';
import Modal_Leave_PlayGame from '../Components/playGame/Modal_Leave_PlayGame';
import { Menu, Provider, Button, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, ListItem, Input, Text, Divider } from 'react-native-elements';
import fetchRank from '../redux/action/RankAction';
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

const mapDispatchToProps = dispatch => ({
    fetchRank : (rid) => dispatch(fetchRank(rid))
})
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
            modalVisible_leave: false,
            wordStore: [],
            colorAnswer: new Animated.Value(0.5),
            turnUser: {turnCounter: 0, user: this.user[0]},
            flagAnswer: false,
            flagSubmit: false,
            colorTurn: '',
        }
    }
    // componentDidMount(){
    //     const userCount = this.props.route.params;
    //     this.setState({userCount: userCount})
    // }

    submitAnswer() {
        Keyboard.dismiss();
        this.setState({
            valueInput: '',
        })
        socket.emit("wordAnswer", { roomPin: this.props.room.roomPin, word: this.state.valueInput });
    };
    static navigationOptions = {
        title: 'Play_Game',
    };
    setModalVisible_Leave = (visible) => {
        this.setState({ modalVisible_leave: visible });
    };
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };
    wrongAnwer(){
        Animated.timing(this.state.colorAnswer, { toValue: 1, duration: 250 })
        .start(() => {Animated.timing( this.state.colorAnswer, { toValue: 0.5, duration: 250, delay: 750 })
        .start()
    });
    };
    trueAnwer(){
        Animated.timing(this.state.colorAnswer, { toValue: 0, duration: 250 })
        .start(() => {Animated.timing( this.state.colorAnswer, { toValue: 0.5, duration: 250, delay: 750 })
        .start()
    });
    };
    componentDidMount() {
        
        //console.log(this.props.route.params);
        socket.on("usersLive", msg => {
            this.setState({
                usersLeft: msg
            })
        });
        socket.on("loseUser", msg => {
            this.wrongAnwer();
            this.setState({
                flagAnswer: false,
            })
        });
        socket.on("wordStore", msg => {
            //console.log(msg);
        
            this.setState({
                wordStore: msg
            });
        });
        socket.on("turnUser", msg => {
            //console.log(msg);
            if(!this.state.flagAnswer){
                this.setState({
                    flagAnswer: true,
                })
            }else
            {
                this.trueAnwer();
            }
            this.setState({
                turnUser: msg,
            })
        });
        socket.on("endGame", async msg => {
            console.log(msg);
            let rid = msg.rid;
            // await this.props.fetchRank(rid);
            this.props.navigation.navigate('Waiting_Rank', {rid: rid});
        });
    }
    render() {
        //console.log(this.user)
        const { modalVisible } = this.state;
        const { modalVisible_leave } = this.state;
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
                            navigation={this.props.navigation}
                            // onPress={() => { this.scroll.scrollTo({ y: y }); y = y * 2 }}
                            onPress={() => {                               
                                this.setModalVisible_Leave(true);
                            }}
                            >
                            <Icon name="chevron-left" size={width * 0.1094//45w
                            } color="#ffffff"
                            />

                        </TouchableOpacity>
                        <View>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible_leave}
                                onRequestClose={() => {
                                    Alert.alert("Modal is closed");
                                }}
                            >
                                <Modal_Leave_PlayGame
                                    navigation={this.props.navigation}
                                    onPress={() => {
                                        this.setModalVisible_Leave(!modalVisible_leave);
                                    }}
                                />
                            </Modal>
                        </View>
                        
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

                    <Animated.View style={{
                        marginTop: height * 0.02928,//20h
                        flexDirection: "column",
                        //paddingVertical: height * 0.02928,//20h
                        alignItems: "center",
                        justifyContent: 'space-around',
                        // marginBottom: 20,
                        alignSelf: "center",
                        height: height * 0.3441,
                        width: width * 0.73,
                        borderRadius: 50,
                        elevation: 10,
                        borderColor: this.state.colorAnswer.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange:["#87ffac","#fff" ,"#ff8787"],
                        }),
                        borderWidth:3,
                        backgroundColor: '#fff'
                    }}>


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

                    </Animated.View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{
                            marginVertical: 5,
                        }}
                        ref={(node) => this.scroll = node}

                    >
                        {
                            this.state.usersLeft.map((item, index) => (
                                <ListCard key={index} turnUser={this.state.turnUser} you={this.props.user.id} item={item}>

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
                        <TouchableOpacity  onPress={() => this.submitAnswer()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Play_Game);

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
        //paddingVertical: height * 0.02928,//20h
        alignItems: "center",
        justifyContent: 'space-around',
        // marginBottom: 20,
        alignSelf: "center",
        height: height * 0.3441,
        width: width * 0.73,
        borderRadius: 50,
        elevation: 10,
    },
    Wrong: {
        backgroundColor: "pink",
    }
});