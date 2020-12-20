import React from 'react'
import {
    View, Text,
    Image, Dimensions,
    TouchableHighlight, StyleSheet,
} from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export default class ModalCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerModal}>
                    <View>
                        <Image style={styles.avatarModal} source={require('../../images/bgg.png')} />
                    </View>
                    <View>
                        <Text style={styles.nameModal}>Hùng</Text>
                    </View>
                </View>
                <View style={styles.contentModal}>

                    <View style={styles.nameModal_2}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: width * 0.0973,//40w
                            color: "#dcdcdc",
                            fontWeight: "bold"
                        }}>2</Text>
                        <Text style={styles.show_Times_Top}>
                            100
                        </Text>
                    </View>
                    <View style={styles.nameModal_1}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: width * 0.14598,//60w
                            color: "#ffd700",
                            fontWeight: "bold",
                        }}>1</Text>
                        <Text style={styles.show_Times_Top}>
                            150
                        </Text>
                    </View>
                    <View style={styles.nameModal_3}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: width * 0.0973,//40w
                            color: "#cd853f",
                            fontWeight: "bold"
                        }}>3</Text>
                        <Text style={styles.show_Times_Top}>
                            80
                        </Text>
                    </View>
                </View>


                <TouchableHighlight
                    underlayColor="#6600bb"
                    style={styles.button_Cancel}
                    onPress={this.props.onPress}
                >
                    <Text style={{
                        color: "#FFF",
                        textAlign: "center",
                        fontSize: width * 0.04379,//18w
                    }}>
                        Cancel
                   </Text>
                </TouchableHighlight>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        marginTop: height * 0.1903,//130h
        backgroundColor: "#6777ef",
        height: height * 0.5856,
        elevation: 10,
        width: width * 0.77858,
        borderRadius: 20,
        flexDirection: "column",
    },
    headerModal: {
        alignItems: "center",
        flex: 1,
        flexDirection: 'column',
        marginTop: height * 0.02928,//20h
    },
    avatarModal: {
        width: width * 0.1827, //75w
        height: height * 0.1098,//75h
        borderRadius: 50,
    },
    nameModal: {
        marginVertical: 10,
        fontSize: width * 0.0608,//25w
        color: "#ffffff",
        fontWeight: "bold"
    },
    nameModal_1: {
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        backgroundColor: '#5454bd',
        height: height * 0.2196,
        textAlign: "center",
        width: width * 0.2189,//90w
        elevation: 10,
    },
    nameModal_2: {
        borderTopStartRadius: 15,
        backgroundColor: '#5454bd',
        height: height * 0.17569,//120h
        width: width * 0.2189,//90w
        elevation: 5,
        textAlign: "center",
        marginTop: height * 0.02928,//20h
    },
    nameModal_3: {
        borderTopEndRadius: 15,
        backgroundColor: '#5454bd',
        height: height * 0.17569,//120h
        width: width * 0.2189,//90w
        elevation: 5,
        textAlign: "center",
        marginTop: height * 0.02928,//20h
    },
    contentModal: {
        alignSelf: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: 'row',
        marginTop: height * 0.02928,//20h
    },
    show_Times_Top: {
        textAlign: "center",
        marginTop: height * 0.01464,//10h
        fontSize: width * 0.04866,//20w
        color: "#ffffff",
        fontWeight: "bold",
    },
    button_Cancel: {
        alignSelf: "center",
        width: width * 0.4866,//200w
        elevation: 5,
        marginBottom: height * 0.02928,//20h
        marginTop: height * 0.0512,//35h
        backgroundColor: "#505dbc",
        paddingVertical: height * 0.01903,//13h
        borderRadius: 40,
        alignSelf: "center"
    },
})