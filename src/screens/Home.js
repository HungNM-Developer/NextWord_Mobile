import React from "react";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, } from "react-native-gesture-handler";
import { IconButton, Colors, Button } from 'react-native-paper';
// import { Text, View, Image, ImageBackground, TextInput, StyleSheet } from "react-native";
import { Image, View, Dimensions, StyleSheet, Text, TouchableOpacity, ImageBackground, } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { addUser } from "../redux/action/UserAction";
import { connect } from "react-redux";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const mapDispatchToProps = dispatch => ({
    addUser: (user) => dispatch(addUser(user)),
})

 class Home extends React.Component {
    componentDidMount() {
        GoogleSignin.configure({
            webClientId: '223218594988-d5tumpoesu3ipedgopvm45laa4irbvcn.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            //offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
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
            const userInfo = await GoogleSignin.signIn().then((user)=>{
                //console.log("check" +user.user.photo);
                this.props.addUser(user.user);
                this.props.navigation.navigate(
                    'New_Join_Game'
                );
            });
            
            
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

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.signIn}
                        >
                            <Image style={styles.icon_google} source={require('../images/google-symbol.png')}></Image>
                            <Text style={styles.textLogin}>Sign in with Google</Text>

                        </TouchableOpacity>
                    </View>


                    {/* <View style={{ paddingHorizontal: 20, marginTop: 20, }}>
                        <Button style={{ borderRadius: 30, padding: 10, }}
                            color="#fff"
                            icon={require('../images/google-symbol.png')}
                            mode="contained"
                            onPress={() => this.signIn()}>
                            <Text style={{ color: '#4b3ca7', fontSize: 20, }}>
                                Sign in with Google
                                </Text>
                        </Button>

                    </View> */}




                </View>
            </ImageBackground>
        );
    }

}

export default connect('',mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    button: {
        shadowColor: "black",
        marginTop: 80,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

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
        fontWeight: "bold"
    },


});
