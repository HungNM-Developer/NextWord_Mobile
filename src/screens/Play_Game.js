import React from "react";
import {
    View, Alert, Modal, StyleSheet,
    Image, ImageBackground, Dimensions,
    TextInput, ScrollView, TouchableHighlight
    , TouchableOpacity,
} from "react-native";
import Modal_Word_List_Used from '../Components/playGame/Modal_Word_List_Used';
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Menu, Provider, Button, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, ListItem, Input, Text, Divider } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import CountdownBar from 'react-native-countdown-bar';
import { StatusBar } from 'expo-status-bar';
import MenuButton from '../Components/MenuButton';
import ListCard_PlayGame from '../Components/playGame/ListCard_PlayGame';
import ModalCard from '../Components/Player/ModalCard';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;



export default class Play_Game extends React.Component {

    static navigationOptions = {
        title: 'Play_Game',
    };
    state = {
        modalVisible: false,
    };
        setModalVisible = (visible) => {
        this.setState({ modalVisible: false });
    };

    render() {
        const { modalVisible } = this.state;

        // const users = [
        //     {
        //         name: 'brynn',
        //         avatar: 'https://i.pinimg.com/originals/f6/15/39/f615398b53054296870a927b4785ff42.jpg'
        //     },
        //     {
        //         name: 'brynn',
        //         avatar: 'https://i.pinimg.com/originals/f6/15/39/f615398b53054296870a927b4785ff42.jpg'
        //     },
        //     {
        //         name: 'brynn',
        //         avatar: 'https://i.pinimg.com/originals/f6/15/39/f615398b53054296870a927b4785ff42.jpg'
        //     },
        //     {
        //         name: 'brynn (You)',
        //         avatar: 'https://i.pinimg.com/originals/f6/15/39/f615398b53054296870a927b4785ff42.jpg'
        //     },
        //     {
        //         name: 'brynn',
        //         avatar: 'https://i.pinimg.com/originals/f6/15/39/f615398b53054296870a927b4785ff42.jpg'
        //     },
        // ]

        const { navigate, state } = this.props.navigation;

        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/play4.png")}
                    style={styles.image}>
                    <View style={styles.header}>                   
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop:-(height*0.0292),
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
                        <Text style={{
                            fontSize: width * 0.0608,//25w
                            // color: "#1abc9c",
                            color: "#f2c026",
                            fontWeight: "bold",
                        }}>4/5 Players
                            </Text>
                        
                        <MenuButton style={styles.menuAvatar}></MenuButton>
                    </View>
                    
                    <View style={styles.NextWord}>

                        <Text
                            style={styles.textCount}>
                            Time: 08
                        </Text>
                        <View >
                            <Divider style={{
                                backgroundColor: "#5454bd",
                                elevation: 1,
                                width: width * 0.1379 //180w
                            }} />
                        </View>

                        <Text style={styles.textNextWord}>
                            NextWord
                        </Text>

                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{
                            marginVertical: 5,
                        }}
                    >
                        <ListCard_PlayGame

                        />
                        <ListCard_PlayGame

                        />

                        <ListCard_PlayGame

                        />
                        <ListCard_PlayGame

                        />
                        <ListCard_PlayGame

                        />


                    </ScrollView>


                    <View style={styles.InputSubmit}>

                        <TextInput
                            placeholder="Enter New Word"
                            style={styles.TextInputContent}
                        />
                        <TouchableOpacity onPress={() => navigate(
                            'New_Join_Game')}>
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
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert("Modal is closed");
                                }}
                            >
                                <Modal_Word_List_Used
                                    onPress={() => {
                                        this.setModalVisible(!modalVisible);
                                    }}
                                />
                            </Modal>
                        </View>

                        
                    </View>
                </ImageBackground>
            </View>

        );
    }
}

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
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: height * 0.0292,//20h
    },
    
    imageBack: {
        tintColor: "#ffffff",
        width: width * 0.0729,//30w
        height: height * 0.0292,//20h
    },
    textCount: {
        fontSize: width * 0.0851,//35w
        borderRadius: 100,
        backgroundColor: "#fff",
        color: "#5454bd",
        padding: height * 0.0219,//15h
        elevation: 5,
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
    },
    buttonStyle: {
        marginVertical: 15,
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
        fontSize: height * 0.065,
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
        // marginTop: height * 0.12,
        flexDirection: "column",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: 'space-around',
        // marginBottom: 20,
        alignSelf: "center",
        backgroundColor: "#ffffff",
        height: height * 0.35,
        width: width * 0.65,
        borderRadius: 30,
        elevation: 10,
    }
});