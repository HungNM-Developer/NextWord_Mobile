import React, { Component } from 'react';
import { Image, View, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class LoginPage extends Component {

    componentDidMount() {
        this.socket = io('http://192.168.0.102:3000');
        this.socket.on("chat message", msg => {
            this.setState({
                chatMessages: [...this.state.chatMessages, msg]
            })
        });
        GoogleSignin.configure({
            // what API you want to access on behalf of the user, default is email and profile
            webClientId: '223218594988-d5tumpoesu3ipedgopvm45laa4irbvcn.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            //hostedDomain: '', // specifies a hosted domain restriction
            //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            //accountName: '', // [Android] specifies an account name on the device that should be used
            //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
    }

    render() {
        return (
            <View style={styles.View}>
                <Image style={styles.imageBackground} source={require('../images/Login-Top.png')}>
                </Image>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.signIn}
                >
                    <Text style={styles.textLogin}>Login With Google</Text>
                    <Image style={styles.icon_google} source={require('../images/google-symbol.png')}></Image>
                </TouchableOpacity>

                <Image style={styles.imageBackgroundBottom} source={require('../images/Login-bottom.png')}>
                </Image>
            </View>

        )
    }

    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
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


}
const styles = StyleSheet.create({
    button: {
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        // shadowOffset: 6,
        borderRadius: 30,
        fontSize: 16,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#ffffff",
        width: width * 0.7,
        height: height * 0.07
    },
    icon_google: {
        resizeMode: "stretch",
        width: 32,
        height: 32
    },
    textLogin: {
        fontSize: 16,
        fontWeight: "bold"
    },
    View: {
        backgroundColor: "white",
        width: width,
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center"
    },
    imageBackground: {
        resizeMode: "stretch",
        // justifyContent: 'center',
        // alignItems: "center",
        height: height * 0.45,
        width: width,
    },
    imageBackgroundBottom: {
        resizeMode: "stretch",
        height: height * 0.2,
        width: width,
    },


});
