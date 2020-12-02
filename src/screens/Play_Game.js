import React from "react";
import { View, Text, Alert, Modal, Image, ImageBackground } from "react-native";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, Colors, } from 'react-native-paper';
import { Menu, Divider, Provider } from 'react-native-paper';
import { Card, ListItem, Button, Input, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import CountdownBar from 'react-native-countdown-bar';
import {StatusBar} from 'expo-status-bar';


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
                name: 'brynn',
                avatar: 'https://i.pinimg.com/originals/f6/15/39/f615398b53054296870a927b4785ff42.jpg'
            },
            {
                name: 'brynn',
                avatar: 'https://i.pinimg.com/originals/f6/15/39/f615398b53054296870a927b4785ff42.jpg'
            },

        ]

        const { navigate, state } = this.props.navigation;
        

        return (
            <ImageBackground
                source={require("../images/play2.png")}
                style={{ height: "100%", width: "100%", }}
            >
                
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
                        <Image source={require("../images/17.png")} style={{ tintColor: "#000", width: 25, height: 15 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 23, color: "#1abc9c", fontWeight:"bold", }}>4/5 Players</Text>
                    <Image
                        source={require("../images/Layer1.png")}
                        style={{ height: 40, width: 40, borderRadius: 30, }}
                    />
                </View>
                
    
  
                <View style={{

                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <View style={{ height: 380, width: "70%", }}>

                        <Card containerStyle={{ padding: 0, borderRadius: 20, }}>
                            <ScrollView showsVerticalScrollIndicator={false}
                                style={{
                                    marginVertical: 10,
                                }}>
                                <Card.Title>Next words</Card.Title>

                                <Card.Divider />
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    alignItems: "center", marginBottom: 10
                                }}>
                                    <Text style={{ fontSize: 23 }}>aaaaa</Text>
                                    <Text style={{ fontSize: 23 }}>gggggfffff</Text>

                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    alignItems: "center", marginBottom: 10
                                }}>
                                    <Text style={{ fontSize: 23 }}>aaaaa</Text>
                                    <Text style={{ fontSize: 23 }}>gggggfffff</Text>

                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    alignItems: "center", marginBottom: 10
                                }}>
                                    <Text style={{ fontSize: 23 }}>aaaaa</Text>
                                    <Text style={{ fontSize: 23 }}>gggggfffff</Text>

                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    alignItems: "center", marginBottom: 10
                                }}>
                                    <Text style={{ fontSize: 23 }}>aaaaa</Text>
                                    <Text style={{ fontSize: 23 }}>gggggfffff</Text>

                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    alignItems: "center", marginBottom: 10
                                }}>
                                    <Text style={{ fontSize: 23 }}>aaaaa</Text>
                                    <Text style={{ fontSize: 23 }}>gggggfffff</Text>

                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    alignItems: "center", marginBottom: 10
                                }}>
                                    <Text style={{ fontSize: 23 }}>aaaaa</Text>
                                    <Text style={{ fontSize: 23 }}>gggggfffff</Text>

                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    alignItems: "center", marginBottom: 10
                                }}>
                                    <Text style={{ fontSize: 23 }}>aaaaa</Text>
                                    <Text style={{ fontSize: 23 }}>gggggfffff</Text>

                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    alignItems: "center", marginBottom: 10
                                }}>
                                    <Text style={{ fontSize: 23 }}>aaaaa</Text>
                                    <Text style={{ fontSize: 23 }}>gggggfffff</Text>

                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    alignItems: "center", marginBottom: 10
                                }}>
                                    <Text style={{ fontSize: 23 }}>aaaaa</Text>
                                    <Text style={{ fontSize: 23 }}>gggggfffff</Text>

                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    alignItems: "center", marginBottom: 10
                                }}>
                                    <Text style={{ fontSize: 23 }}>aaaaa</Text>
                                    <Text style={{ fontSize: 23 }}>gggggfffff</Text>

                                </View>

                            </ScrollView>
                        </Card>
                    </View>
                    <View style={{ height: 380, width: "30%", }}>

                        <Card containerStyle={{ padding: 0, borderRadius: 30, }}>
                            <ScrollView showsVerticalScrollIndicator={false}
                                style={{
                                    marginVertical: 10,
                                }}>
                                <Card.Title>Players</Card.Title>

                                <Card.Divider />

                                {
                                    users.map((u, i) => {
                                        return (
                                            <View key={i} style={{
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}>
                                                <Image
                                                    style={{ height: 50, width: 50, borderRadius: 30, }}
                                                    resizeMode="cover"
                                                    source={{ uri: u.avatar }}
                                                />
                                                <Text style={{ fontSize: 20, textAlign: "center" }}>{u.name}</Text>
                                            </View>
                                        );
                                    })
                                }
                            </ScrollView>
                        </Card>

                    </View>
                </View>
                <View style={{ marginVertical: 20, paddingHorizontal: 30 }}>
                    <Input
                        inputStyle={{ fontSize: 23 }}
                        placeholder='Next Word'
                        leftIcon={{ type: 'font-awesome', name: 'arrow-circle-right', color: '#6777ef' }}
                    />
                    {/* <Button
                        titleStyle={{ fontSize: 20 }}
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />
                        }
                        title="Next Word"
                    /> */}
                    <Button
                        buttonStyle={{ borderRadius: 50, }}
                        titleStyle={{ fontSize: 23, }}
                        ViewComponent={LinearGradient} // Don't forget this!
                        linearGradientProps={{
                            colors: ['#a1a9e7', '#6777ef'],
                            start: { x: 0, y: 0.5 },
                            end: { x: 1, y: 0.5 },
                        }}
                        title="NEXT WORD"

                    />
                </View>

            </ImageBackground>


        );
    }
}