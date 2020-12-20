import React from 'react'
import {
    View, Text, TouchableHighlight, StyleSheet,
    Dimensions, TouchableOpacity, ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation'; 
import { connect } from "react-redux";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


class Modal_HowToPlay extends React.Component {
    
    render() {
        const { navigate } = this.props.navigation; 
        return (
            <View style={styles.container}>

                <View>
                    <Text style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontWeight: 'bold', fontSize: 35,
                        paddingBottom:height * 0.0439,//30h
                    }}>
                        How To Play
                        </Text>
                </View>
                <ScrollView>
                    <Text style={{
                        color: '#cfcdff',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        paddingBottom:10,
                        fontSize: width * 0.0486//20w
                    }}>
                        NextWord is a word game with 2 or more people!
                        One person needs to create a game and invite others 
                        by sharing the game ID.
                        
                        
                    </Text>
                    <Text style={{
                        color: '#cfcdff',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        paddingBottom:10,
                        fontSize: width * 0.0486//20w
                    }}>
                        After enough people in the room,
                        the room owner will press start the game
                        The order number in the lobby is also the player's order number.
                    </Text>
                    <Text style={{
                        color: '#cfcdff',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        paddingBottom:10,
                        fontSize: width * 0.0486//20w
                    }}>
                        The rules of the game are
                        the first person can give whatever word they like, 
                        the next person's task will enter a word whose letter 
                        begins to match the ending letter of the previous word.
                    </Text>
                </ScrollView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    paddingTop:10,
                }}>
                    <View>
                        <TouchableHighlight
                            onPress={this.props.onPress}
                            underlayColor="#6600bb"
                            style={{
                                width: width*0.4866,//200w
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
                    

                </View>

            </View>

        )
    }
}
export default Modal_HowToPlay;

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        marginTop: height * 0.1171,//80h
        backgroundColor: "#6777ef",
        height: height * 0.73206,//500h
        elevation: 50,
        width: width * 0.876,//360w
        borderRadius: 20,
        flexDirection: "column",
        justifyContent: 'space-between',
        padding: 25,
    },

})