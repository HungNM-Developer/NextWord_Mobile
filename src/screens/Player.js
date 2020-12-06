import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, 
    ImageBackground, Alert, Modal, Image, ScrollView, TouchableOpacity } from 'react-native';
import { IconButton, Colors, Button } from 'react-native-paper';
import ListCard from '../screens/ListCard';
import ModalCard from '../screens/ModalCard';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuButton from '../Components/MenuButton';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


class Player extends Component {
    static navigationOptions = {
        title: 'Player',
    };
    state = {
        modalVisible: false,
    };
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };
    render() {
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

                        <MenuButton style={styles.menuAvatar}></MenuButton>
                    </View>
                    <View style={styles.headerContent}>
                        <Text
                            style={{
                                fontSize: height * 0.07,
                                color: "#FFF",
                                fontWeight: 'bold'
                            }}>
                            LOBBY
                        </Text>
                        <View style={{flexDirection: "row",}}>
                        <Text
                            style={{
                                fontSize: height * 0.06,
                                color: "#FFF",
                            }}>
                            Game ID is
                        </Text>
                        <Text
                            style={{
                                fontSize: height * 0.06,
                                color: "#FFF",
                            }}>
                            _
                        </Text>
                        <Text
                            style={{
                                fontSize: height * 0.06,
                                color: "#f2c026",
                                fontWeight: 'bold'
                            }}>
                            AqBvd
                        </Text>
                        </View>
                        
                        <Text
                            style={{
                                fontSize: height * 0.038,
                                color: "#b1a7b9",
                            }}>
                            5/10 player
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
                        <ListCard
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        />
                        <ListCard
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        />
                        <ListCard
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        />
                        <ListCard
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        />
                        <ListCard
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        />

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

export default Player;

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