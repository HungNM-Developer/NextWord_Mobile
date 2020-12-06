import React from "react";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, } from "react-native-gesture-handler";
import { IconButton, Colors, Button } from 'react-native-paper';
// import { Text, View, Image, ImageBackground, TextInput, StyleSheet } from "react-native";
import { Image, View, Dimensions, StyleSheet, Text, TouchableOpacity, ImageBackground, } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export default class Home extends React.Component {
    componentDidMount() {


        GoogleSignin.configure({
            webClientId: '223218594988-d5tumpoesu3ipedgopvm45laa4irbvcn.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            //hostedDomain: '', // specifies a hosted domain restriction
            //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.

        });
    }
    static navigationOptions = {
        title: 'Home',
    };
    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.props.navigation.navigate(
                'New_Join_Game'
            );
            // console.log(userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated

            } else {
                // some other error happened
            }
            console.log(error)
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground
                source={require("../images/back.png")}
                style={{ width: "100%", height: "100%" }}>
                

                <View style={{ paddingHorizontal: 10, marginTop: height*0.08 }}>
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: height * 0.085,
                            color: "#522289",
                            fontWeight: 'bold'
                        }}>
                        NEXT WORD
                    </Text>

                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        padding: height * 0.07,
                        
                    }}>
                       
                        <Image
                            source={require("../images/logo-small.png")}
                            style={{ height: height * 0.33, 
                            width: width * 0.55, 
                            backgroundColor: "#fff", 
                            borderRadius: 200,}} />
                    
                        
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.signIn}
                        >
                            <Image style={styles.icon_google} source={require('../images/google-symbol.png')}></Image>
                            <Text style={styles.textLogin}>Sign in with Google</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    button: {
        shadowColor: "#000",
        marginTop: height * 0.1094,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,

        // shadowOffset: 6,
        borderRadius: 30,
        fontSize: 25,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#ffffff",
        width: width * 0.8,
        height: height * 0.08,
    },
    icon_google: {
        resizeMode: "stretch",
        width: 30,
        height: 30
    },
    textLogin: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#5451bc"
    },


});
