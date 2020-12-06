import React from "react";
import {
    View, Alert, Modal, StyleSheet,
    Image, ImageBackground, Dimensions, TextInput, ScrollView, TouchableHighlight
    , TouchableOpacity,
} from "react-native";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Menu, Provider, Button, List } from 'react-native-paper';
import { Card, ListItem, Input, Text, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import CountdownBar from 'react-native-countdown-bar';
import { StatusBar } from 'expo-status-bar';
import MenuButton from '../Components/MenuButton';
import ListCard from '../screens/ListCard';
import ModalCard from '../screens/ModalCard';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;



export default class Play_Game extends React.Component {

    static navigationOptions = {
        title: 'Play_Game',
    };

    render() {

        const users = [
            {
                name: 'brynn',
                avatar: 'https://i.pinimg.com/originals/f6/15/39/f615398b53054296870a927b4785ff42.jpg'
            },
            {
                name: 'brynn',
                avatar: 'https://i.pinimg.com/originals/f6/15/39/f615398b53054296870a927b4785ff42.jpg'
            },
            {
                name: 'brynn',
                avatar: 'https://i.pinimg.com/originals/f6/15/39/f615398b53054296870a927b4785ff42.jpg'
            },
            {
                name: 'brynn (You)',
                avatar: 'https://i.pinimg.com/originals/f6/15/39/f615398b53054296870a927b4785ff42.jpg'
            },
            {
                name: 'brynn',
                avatar: 'https://i.pinimg.com/originals/f6/15/39/f615398b53054296870a927b4785ff42.jpg'
            },

        ]

        const { navigate, state } = this.props.navigation;





        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/play4.png")}
                    style={styles.image}>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: height * 0.04
                    }}>
                        <TouchableOpacity onPress={() => navigate(
                            'New_Join_Game')} style={{
                                backgroundColor: "#ff0000",
                                height: height * 0.055, width: width * 0.122, borderRadius: 30,
                                elevation: 3,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Image source={require("../images/17.png")}

                                style={{
                                    tintColor: "#ffffff",
                                    width: width * 0.06,
                                    height: height * 0.02
                                }} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                fontSize: width * 0.056,
                                color: "#1abc9c",
                                fontWeight: "bold",
                            }}>4/5 Players</Text>
                        </View>
                        <View>
                            <MenuButton style={styles.menuAvatar}></MenuButton>
                        </View>
                    </View>
                    <View>

                    </View>
                    <View style={styles.NextWord}>

                        <Text
                            style={{
                                fontSize: width * 0.09,
                                borderRadius: 100,
                                backgroundColor: "#fff",
                                color: "#5454bd",
                                padding: height * 0.02,
                                elevation: 10,
                            }}>
                            08
                            </Text>
                        <View >

                            <Divider style={{ backgroundColor: "#5454bd", height: 0.5, width: 180 }} />
                        </View>

                        <Text style={styles.textCount}>
                            NextWord
                            </Text>

                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{
                            marginVertical: 5,
                        }}
                    >
                        <ListCard

                        />
                        <ListCard

                        />

                        <ListCard

                        />
                        <ListCard

                        />
                        <ListCard

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
                                style={{ height: width * 0.06, width: width * 0.06, tintColor: '#6777ef' }}
                                source={require('../images/enter.png')}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{}}>
                        {/* <Button
                            onPress={() => navigate(
                                'Player')}
                            labelStyle={styles.titleStyle}
                            style={styles.buttonStyle}
                            type="outline">
                            word list used
                            </Button> */}

                        <List.AccordionGroup >
                        <ScrollView >
                            <List.Accordion titleStyle={{
                                color: '#5454bd',
                                marginHorizontal: width * 0.05,
                                backgroundColor: '#fff', elevation: 10,
                                borderRadius: 50,
                                padding: width * 0.04, fontWeight: 'bold',
                                fontSize: width * 0.05
                            }} title="Word list used" id="1">
                                
                                    
                                        <List.Item titleStyle={{
                                            color: '#f2c026',
                                            paddingLeft: width * 0.08,
                                            fontWeight: 'bold',
                                            fontSize: width * 0.055
                                        }} title="BeautifulBeautifulBeautiful" />
                                        <List.Item titleStyle={{
                                            color: '#f2c026',
                                            padding: width * 0.08,
                                            fontWeight: 'bold',
                                            fontSize: width * 0.055
                                        }} title="BeautifulBeautifulBeautiful" />
                                        
                            </List.Accordion>
                            </ScrollView>

                            {/* <View>
                                <Text>
                                    List.Accordion can be wrapped because implementation uses React.Context.
                                </Text>
                                <List.Accordion title="Accordion 3" id="3">
                                    <List.Item title="Item 3" />
                                </List.Accordion>
                            </View> */}
                        </List.AccordionGroup>

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
        flexDirection: "row", paddingHorizontal: width * 0.08,
        paddingVertical: height * 0.03, justifyContent: "space-between",
        alignItems: "center",
    },

    imageBack: {
        tintColor: "#000",
        width: width * 0.06,
        height: height * 0.02
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
        marginBottom: 10,
        width: width * 0.8,
        borderRadius: 30,
        elevation: 10,
        backgroundColor: "#fff",


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
    textCount: {
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
        marginTop: height * 0.12,
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