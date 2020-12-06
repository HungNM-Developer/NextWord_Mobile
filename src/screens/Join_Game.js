import React from "react";
import {
    View, Text, Alert, Modal, Image, TextInput,
    ImageBackground, Dimensions, StyleSheet
} from "react-native";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
// import { Input } from 'react-native-elements';
import { ScrollView, TouchableOpacity, TouchableHighlight } from "react-native-gesture-handler";
import { IconButton, Colors, Button, } from 'react-native-paper';
import MenuButton from '../Components/MenuButton';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class Join_Game extends React.Component {
    static navigationOptions = {
        title: 'Join_Game',
    };
    render() {
        const { navigate, state } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/join9.png")}
                    style={styles.image}>

                    <View style={{
                        flex: 2,
                        marginTop: height * 0.03,
                        marginLeft: width * 0.77
                    }}>

                        <MenuButton style={styles.menuAvatar}></MenuButton>
                    </View>

                    <View style={styles.headerContent}>
                        <Text
                            style={styles.TextheaderContent}>
                            Join Game
                         </Text>
                    </View>

                    <View style={styles.Content}>
                        <View
                            style={styles.ViewContent}>
                            <Image
                                source={require("../images/search.png")}
                                style={{ height: 15, width: 15 }}
                            />
                            <TextInput
                                placeholder="Enter Game ID"
                                style={styles.TextInputContent}
                            />
                        </View>
                        <Button
                            onPress={() => navigate(
                                'Player')}
                            labelStyle={styles.titleStyle}
                            style={styles.buttonStyle}
                            type="outline">
                            Join
                        </Button>
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            justifyContent: "center", marginTop: height * 0.06
                        }}>
                            <Button
                                onPress={() => navigate(
                                    'New_Join_Game')}
                                style={styles.buttonStyleBack}
                                mode="outlined">
                                <Icon name="ios-arrow-back" size={height * 0.04} color="#ffff" />
                            </Button>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    Avatar: {
        height: 40,
        width: 40,
        borderRadius: 30,
        marginTop: 20,
        marginLeft: width * 0.77
    },

    menuAvatar: {
        height: 40,
        width: 40,
        borderRadius: 30,
    },
    headerContent: {
        flex: 1,
        alignItems: "center",
    },
    TextheaderContent: {
        fontSize: height * 0.085,
        color: "#522289",
        fontWeight: 'bold'
    },
    Content: {
        paddingHorizontal: width * 0.05,
        flex: 5,
        marginTop: height * 0.1
    },
    ViewContent: {
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderRadius: 60,
        alignItems: "center",
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
    },
    TextInputContent: {
        paddingHorizontal: width * 0.07,
        fontSize: width * 0.05,
        color: "#522289",
        fontWeight: 'bold',
    },
    Footer: {
        marginVertical: 20,
        alignItems: "center",
        flex: 1,
    },

    buttonStyleBack: {

        width: width * 0.2433,
        borderRadius: 40,
        padding: height * 0.01,
        marginVertical: height * 0.05,
        borderBottomWidth: width * 0.006,
        borderTopWidth: width * 0.006,
        borderStartWidth: width * 0.006,
        borderEndWidth: width * 0.006,
        borderBottomColor: '#fff',
        borderTopColor: '#fff',
        borderStartColor: '#fff',
        borderEndColor: '#fff',
        // backgroundColor: "#fff",
    },
    buttonStyle: {
        borderRadius: 50,
        backgroundColor: "#fff",
        padding: height * 0.01,
        marginVertical: height * 0.03,
    },
    titleStyle: {
        fontSize: height * 0.035,
        color: "#4b3ca7",
    },
});