import React, { Component } from "react";
import * as Animatable from 'react-native-animatable';
import {
    Image, View, Dimensions, StatusBar, Animated, ToastAndroid,
    StyleSheet, Text, TouchableOpacity, ImageBackground,
} from 'react-native';

import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { addUser } from "../redux/action/UserAction";
import { connect } from "react-redux";

var SoundPlayer = require('react-native-sound');

var song = null;

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const mapDispatchToProps = dispatch => ({
    addUser: (user) => dispatch(addUser(user)),
});

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pause: false,
        };
    }
    componentDidMount() {
        GoogleSignin.configure({
            webClientId: '223218594988-d5tumpoesu3ipedgopvm45laa4irbvcn.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            //offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            //hostedDomain: '', // specifies a hosted domain restriction
            //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        });
        
    }
    // onPressButtonPlay() {
    //     song = new SoundPlayer('rumors_of_me.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
    //         if (error)
    //             ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
    //         else {
    //             song.play((success) => {
    //                 if (!success)
    //                     ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
    //             });
    //         }
    //     });
    // };
    onPressButtonPause() {
        if (song != null) {
            if (this.state.pause) // play resume
                song.play((success) => {
                    if (!success)
                        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
                });
            else song.pause();

            this.setState({ pause: !this.state.pause });
        }
    }
    static navigationOptions = {
        title: 'Home',
    };

    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            const userInfo = await GoogleSignin.signOut().then((user) => {
                this.setState({ user: null }); // Remember to remove the user from your app's state as well
                this.props.navigation.navigate(
                    'Home'
                );
            });
        } catch (error) {
            console.error(error);
        }
    };
    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn().then((user) => {
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

    // state = {
    //     fadeAnim: new Animated.Value(0),
    //     moveAnim: new Animated.Value(0),
    // };


    render() {
        song = new SoundPlayer('neffex_rumors.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {          
            if (error)
                ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
            else {
                song.play((success) => {
                    if (!success)
                        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
                }             
                );     
                 song.setNumberOfLoops(-1);
            }  
        });
        const { navigate } = this.props.navigation;
        return (
            <Animatable.View style={{ flex: 1 }}
                animation="fadeIn" duration={2000} delay={1000}>
                <ImageBackground
                    source={require("../images/back.png")}
                    style={{ width: "100%", height: "100%" }}>

                    <View>
                        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                    </View>

                    <View style={{
                        paddingHorizontal: width * 0.024,//10
                        marginTop: height * 0.1098//75
                    }}>
                        <View style={styles.logoContainer}>
                            {/* <Animatable.Text
                                animation="pulse" duration={2000} delay={1000}
                                style={[styles.logoText]}>N</Animatable.Text> */}
                            <Animatable.Text
                                animation="rubberBand" duration={2000} delay={1000}
                                style={styles.logoText}>
                                Next Word
                        </Animatable.Text >
                        </View>
                        {/* <View>
                        <Text style={[styles.logoText]}>
                            Next Word
                        </Text>
                    </View> */}

                        <View style={{
                            alignItems: "center",
                            justifyContent: "center",
                            padding: height * 0.073,//50

                        }}>

                            <Animatable.Image
                                animation="rotate" duration={2000} delay={1000}
                                source={require("../images/logo-small.png")}
                                style={styles.imageLogo} />
                            <Animatable.View
                                animation="fadeInUp" duration={2000} delay={1000}>

                                <TouchableOpacity

                                    style={styles.button}
                                    onPress={this.signIn}
                                >
                                    <Image style={styles.icon_google}
                                        source={require('../images/google-symbol.png')}></Image>
                                    <Text style={styles.textLogin}>Sign in with Google</Text>

                                </TouchableOpacity>
                            </Animatable.View>

                            {/* <TouchableOpacity onPress={this.onPressButtonPlay.bind(this)}>
                                <Text style={styles.buttonText}>Play</Text>
                            </TouchableOpacity> */}

                            {/* <TouchableOpacity onPress={this.onPressButtonPause.bind(this)}>
                                <Text style={styles.buttonText}>{this.state.pause ? 'Resume' : 'Pause'}</Text>
                            </TouchableOpacity> */}
                        </View>

                    </View>
                </ImageBackground>
            </Animatable.View>
        );
    }

}

export default connect('', mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    imageLogo: {
        height: width * 0.559,//230 
        width: width * 0.559,//230 
        backgroundColor: "#ffffff",
        borderRadius: 200,
    },
    logoContainer: {
        alignSelf: "center",
        flexDirection: "row",
    },

    logoText: {
        textAlign: "center",
        fontSize: height * 0.087,//60
        color: "#522289",
        fontWeight: 'bold'
    },
    button: {
        shadowColor: "#000",
        marginTop: height * 0.117,//80
        elevation: 6,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#ffffff",
        width: width * 0.802,//330
        height: height * 0.087,//60
    },
    icon_google: {
        resizeMode: "stretch",
        width: width * 0.072,
        height: width * 0.072,
    },
    textLogin: {
        fontSize: width * 0.06083,//25
        fontWeight: "bold",
        color: "#5451bc"
    },


});
