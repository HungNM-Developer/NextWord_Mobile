import React from "react";
import { View, Text, Alert, Modal, Image, ImageBackground, TextInput } from "react-native";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, Colors, Button, } from 'react-native-paper';


export default class Join_Game extends React.Component {
    static navigationOptions = {
        title: 'Join_Game',
    };
    render() {
        const { navigate, state } = this.props.navigation;
        return (
            <ImageBackground
                source={require("../images/join6.png")}
                style={{ height: "100%", width: "100%", }}>
                <View style={{ paddingHorizontal: 30, marginTop: 130 }}>
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 50,
                            color: "#5965e6",
                            fontWeight: 'bold'
                        }}>
                        Join Game
                    </Text>
                    <View
                        style={{
                            borderLeftWidth: 2,
                            borderRightWidth: 2,
                            borderTopWidth: 2,
                            borderBottomWidth: 2,
                            flexDirection: "row",
                            backgroundColor: "#fff",
                            borderRadius: 40,        
                            alignItems: "center",
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            marginTop: 80,
                        }}>
                        <Image
                            source={require("../images/enter.png")}
                            style={{ height: 40, width: 40, backgroundColor: "#ffffff", borderRadius: 20 }}
                        />
                        <TextInput
                            placeholder="Game ID" type="number"
                            style={{ paddingHorizontal: 20, fontSize: 28, color: '#fff', borderBottomColor:'#000' }}
                        />
                    </View>


                    <Button style={{ borderRadius: 30, marginTop: 30 }}
                        color="#5965e6"
                        mode="contained"
                        onPress={() => navigate(
                            'New_Join_Game'
                        )}>
                        <Text style={{ color: '#fff', fontSize: 25, }}>
                            Join
                        </Text>
                    </Button>


                </View>
                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop:120
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("New_Join_Game")}
                        style={{   
                            borderLeftWidth: 2,
                            borderRightWidth: 2,
                            borderTopWidth: 2,
                            borderBottomWidth: 2,                       
                            alignItems: "center",
                            justifyContent: "center",
                            height: 60,
                            width: 90,
                            borderRadius: 30,
                            backgroundColor: "#fff",                          
                        }}>
                        <Image
                            source={require("../images/undo.png")}
                            style={{ height: 35, width: 35, }} />
                    </TouchableOpacity>
                </View>


            </ImageBackground>

        );
    }
}