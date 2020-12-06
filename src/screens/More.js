import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground,Alert, Modal,Image,ScrollView,} from 'react-native';
import { IconButton, Colors, Button } from 'react-native-paper';
import ListCard from '../Components/Player/ListCard';
import ModalCard from '../Components/Player/ModalCard';
import Icon from 'react-native-vector-icons/Ionicons';


class More extends Component {
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
                    style={{ width: "100%", height: "100%",}}>
                    <View style={{ paddingHorizontal: 10, marginTop: 50 }}>
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 70,
                                color: "#FFF",
                                fontWeight: 'bold'
                            }}>
                            LOBBY
                    </Text>
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 30,
                                color: "#FFF",

                            }}>
                            Game ID: 2175173
                    </Text>
                        <Text
                            style={{
                                textAlign: "center",
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
          }}
        >
          
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
                                'New_Join_Game'
                                )}>
                                <Text style={{color: '#FFF',fontSize:25,}}>
                                    Start
                                </Text>                        
                    </Button>
                </ImageBackground>
                
            </View>
        );
    }
}

export default More;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
});