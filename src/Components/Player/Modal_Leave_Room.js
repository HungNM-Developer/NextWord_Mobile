import React from 'react'
import {
    View, Text, TouchableHighlight, StyleSheet,
    Dimensions, TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation'; 
import { connect } from "react-redux";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


class Modal_Leave_Room extends React.Component {
    
    render() {
        const { navigate } = this.props.navigation; 
        return (
            <View style={styles.container}>

                <View>
                    <Text style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontWeight: 'bold', 
                        fontSize: width * 0.08516//35w
                    }}>
                        Are you sure?
                        </Text>
                </View>
                <View>
                    <Text style={{
                        color: '#cfcdff',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: width * 0.0486//20w
                    }}>
                        Leaving the game as host will
                        end the game for everyone!
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                }}>
                    <View>
                        <TouchableHighlight
                            onPress={this.props.onPress}
                            underlayColor="#6600bb"
                            style={{
                                width: width*0.29197,
                                elevation: 2,
                                backgroundColor: "#505dbc",
                                paddingVertical: 13,
                                borderRadius: 25,

                            }}>
                            <Text style={{
                                fontWeight: "bold",
                                color: "#FFF",
                                textAlign: "center",
                                fontSize: 20
                            }}>
                                Cancel
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight                           
                            onPress={() => navigate('New_Join_Game')} 
                            underlayColor="#6600bb"
                            style={{
                                width: width*0.29197,
                                elevation: 2,
                                backgroundColor: "#505dbc",
                                paddingVertical: 13,
                                borderRadius: 25,

                            }}>
                            <Text style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontSize: width * 0.0486,//20w
                                fontWeight: "bold",
                            }}>
                                Leave
                        </Text>
                        </TouchableHighlight>
                    </View>

                </View>

            </View>

        )
    }
}
export default Modal_Leave_Room;

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        marginTop: height * 0.36603,//250h
        backgroundColor: "#6777ef",
        height: height * 0.35139,//230h
        elevation: 20,
        width: width * 0.7786,//320w
        borderRadius: 20,
        flexDirection: "column",
        justifyContent: 'space-between',
        padding: 25,
    },

})