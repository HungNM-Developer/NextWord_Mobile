import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Alert, Modal, Image, ScrollView, TouchableOpacity } from 'react-native';
import { IconButton, Colors, Button } from 'react-native-paper';
import ListCard from '../screens/ListCard';
import ModalCard from '../screens/ModalCard';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuButton from '../Components/MenuButton';
import { connect } from 'react-redux';
const mapStateToProps = state => {
    return {
        room: state.roomReducer.roomPin,
    }
}
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
                    style={{ width: "100%", height: "100%", }}>


                    <View style={{
                        flexDirection: "row", paddingHorizontal: 50,
                        paddingVertical: 20, justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            color: "#5454bd",
                            alignItems: "center",
                        }}>
                            <Image source={require("../images/17.png")} style={{ tintColor: "#fff", width: 25, height: 15 }} />
                        </TouchableOpacity>
                        {/* <Image
                                source={require("../images/Layer1.png")}
                                style={{ height: 40, width: 40, borderRadius: 30,  }}
                            /> */}
                        <MenuButton style={{ height: 40, width: 40, borderRadius: 30 }}>

                        </MenuButton>
                    </View>
                    <View style={{ alignItems: "center", }}>
                        <Text
                            style={{

                                fontSize: 70,
                                color: "#FFF",
                                fontWeight: 'bold'
                            }}>
                            LOBBY
                        </Text>
                        <Text
                            style={{

                                fontSize: 30,
                                color: "#FFF",

                            }}>
                            Game ID is {this.props.room.roomPin}
                    </Text>
                        <Text
                            style={{

                                fontSize: 25,
                                color: "#FFF",

                            }}>
                            5/10 player
                    </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 70,
                            marginTop: 60,
                        }}>
                        <Icon name="ios-person" size={25} color="#5454bd" />
                        <Icon name="ios-checkmark-circle" size={25} color="#5454bd" style={{ marginLeft: 220 }} />
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
                        <Text style={{ color: '#FFF', fontSize: 25, }}>
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
        alignItems: 'center',
    },
});