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



//component
import MenuButton from '../Components/MenuButton';
import ListCard_PlayGame from '../Components/playGame/ListCard_PlayGame';
import ModalCard from '../Components/Player/ModalCard';
import TimeComponent from '../Components/playGame/TimeComponent';
import { connect } from "react-redux";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
}

class Play_Game extends React.Component {

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
                            
                         }}
                            onPress={() => this.props.navigation.navigate("New_Join_Game")}>
                            
                            <Icon name="chevron-left" size={width*0.1094//45w
                            } color="#ffffff" />
                            
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: width * 0.0608,//25w
                            // color: "#1abc9c",
                            color: "#f2c026",
                            fontWeight: "bold",
                        }}>4/5 Players
                            </Text>
                        
                        <MenuButton avatarURL = {this.props.user.photo} style={styles.menuAvatar}></MenuButton>
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
        marginVertical: height*0.02196,//15h
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
        marginTop: height*0.02928,//20h
        flexDirection: "column",
        paddingVertical: height*0.02928,//20h
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