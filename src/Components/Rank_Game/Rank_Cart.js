import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image, Dimensions,Text
} from 'react-native';
import * as Animatable from 'react-native-animatable';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default class Rank_Cart extends Component {
    render() {
        console.log("test");
        console.log(this.props.item);
        return (
            <Animatable.View style={styles.list_Rank}
                animation="bounceInRight" duration={2000} delay={this.props.index}>
                <View style={{}}>
                    <Text style={styles.number_List_Rank}>{++this.props.item.index}</Text>
                </View>
                <View style={styles.card_list_Rank}>
                    <View style={{
                        alignItems: 'center',
                        flexDirection: "row",
                    }}>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Image style={{
                                width: 55,
                                height: 55,
                                borderRadius: 30,
                            }} source={{ uri: this.props.item.item.photo }} />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{
                                fontSize: width * 0.0535,//22w
                                color: "#f8f8fe",
                            }}>{this.props.item.item.name}</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        paddingRight: 15,
                        flexDirection: "row",
                        justifyContent: 'flex-end'
                    }}>
                        <Text style={styles.showWord}>{this.props.item.item.word.length}w</Text>
                    </View>
                </View>
            </Animatable.View>);
    }
}

const styles = StyleSheet.create({
    list_Rank: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: height * 0.015,
        marginBottom: height * 0.015,
    },
    number_List_Rank: {
        color: "#5450ba",
        fontSize: width * 0.0608,//25w
    },
    card_list_Rank: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
        padding: width * 0.0243,
        backgroundColor: "#5450ba",
        width: '80%',
        borderRadius: 50,
        elevation: 5,
    },
    showWord: {
        fontSize: width * 0.0535,//25w
        color: "#b1a7b9",
    },
})
