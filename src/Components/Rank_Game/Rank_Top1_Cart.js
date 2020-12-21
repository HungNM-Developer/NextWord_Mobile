import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, Icon } from 'react-native';
import * as Animatable from 'react-native-animatable';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default class Rank_Top1_Cart extends Component {
    render() {
        return (
            <Animatable.View style={styles.Header_Rank_Top}
                animation="zoomInDown" duration={2000} delay={1000}>
                <View style={styles.Top2}>
                    <View>
                        <Text style={{
                            fontSize: width * 0.0608,//25w
                            color: "#dcdcdc",
                        }}>
                            2
                    </Text>
                    </View>
                    <View style={{}}>
                        <Image style={styles.imageTop2} source={require('../../images/images.png')} />
                    </View>
                    <View>
                        {/* <Text style={styles.nameTop2}>{this.props.data.name}</Text> */}
                    </View>
                    <View>
                        <Text style={styles.showWord}>15w</Text>
                    </View>
                </View>
                <View style={styles.Top1}>
                    <Icon name="crown" size={height * 0.043//30h
                    } color="#ffd700" />
                    <View style={{}}>
                        <Image style={styles.imageTop1} source={require("../../images/bgg.png")} />
                    </View>
                    <View>
                        {/* <Text style={styles.nameTop1}>{this.state.user1.name}</Text> */}
                    </View>
                    <View>
                        <Text style={styles.showWord}>20w</Text>
                    </View>
                </View>

                <View style={styles.Top3}>
                    <View>
                        <Text style={{
                            fontSize: width * 0.0608,//25w
                            color: "#cd853f",
                        }}>
                            3
                                </Text>
                    </View>
                    <View style={{}}>
                        <Image style={styles.imageTop3} source={require('../../images/1.jpg')} />
                    </View>
                    <View>
                        <Text style={styles.nameTop3}>Name C</Text>
                    </View>
                    <View>
                        <Text style={styles.showWord}>10w</Text>
                    </View>
                </View>
            </Animatable.View>
        );
    }
}
const styles = StyleSheet.create({
    Top2: {
        alignItems: "center",
        flex: 1,
        flexDirection: 'column',
        marginTop: height * 0.0292,
    },
    imageTop2: {
        shadowColor: '#000',
        shadowOpacity: 5.5,
        width: width * 0.1827, //75w
        height: width * 0.1827, //75w
        borderRadius: 50,
        borderWidth: width * 0.008,
        borderColor: '#dcdcdc'
    },
    nameTop2: {
        fontSize: width * 0.0608,//25w
        color: "#dcdcdc",
        fontWeight: "bold"
    },
    showWord: {
        fontSize: width * 0.0535,//25w
        color: "#b1a7b9",
    },
})
