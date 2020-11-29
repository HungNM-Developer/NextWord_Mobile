import React from "react";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, Colors, Button } from 'react-native-paper';
import { Text, View, Image, ImageBackground, TextInput, StyleSheet } from "react-native";

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground
                source={require("../images/back.png")}
                style={{ width: "100%", height: "100%" }}>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 40,
                        alignItems: "center",
                        paddingHorizontal: 40,
                    }}>
                    
                </View>

                <View style={{ paddingHorizontal: 10, marginTop: 35 }}>
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 55,
                            color: "#522289",
                            fontWeight: 'bold'
                        }}>
                        NEXT WORD
                    </Text>

                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 50
                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("New_Join_Game")}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 260,
                                width: 260,
                                borderRadius: 200,
                                backgroundColor: "#fff",
                            }}>
                            <Image
                                source={require("../images/logo1.png")}
                                style={{ height: 220, width: 220, borderRadius: 200 }} />
                        </TouchableOpacity>
                    </View>

                    
                    <View style={{ paddingHorizontal: 20, marginTop:20, }}>
                        <Button style={{borderRadius: 30, padding: 10,}}
                        color="#fff" 
                        icon="google" 
                        mode="contained" 
                                onPress={() => navigate(
                                'New_Join_Game'
                                )}>
                                <Text style={{color: '#4b3ca7',fontSize:20,}}>
                                    Sign in with Google
                                </Text>                        
                            </Button>
                        
                    </View>
                    
                </View>
            </ImageBackground>
        );
    }

}
