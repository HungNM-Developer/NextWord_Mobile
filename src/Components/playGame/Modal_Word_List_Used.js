import React from 'react'
import {View, Text, TouchableHighlight, StyleSheet,
    Dimensions, TouchableOpacity, ScrollView} from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default class Modal_Word_List_Used extends React.Component{
    render() {
        
        return (
            <View style={styles.container}>

                <View>
                    <Text style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontWeight: 'bold', fontSize: 35,
                        paddingBottom:height * 0.0439,//30h
                    }}>
                        List Word Used
                        </Text>
                </View>
                <ScrollView>
                    <Text style={{
                        color: '#cfcdff',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingBottom:10,
                        fontSize: width * 0.0608//25w
                    }}>
                        NextWord 

                    </Text>
                    <Text style={{
                        color: '#cfcdff',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingBottom:10,
                        fontSize: width * 0.0608//25w
                    }}>
                        Display
                    </Text>
                    <Text style={{
                        color: '#cfcdff',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingBottom:10,
                        fontSize: width * 0.0608//25w
                    }}>
                        Year
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
                                elevation: 4,
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