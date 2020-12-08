import React, { Component } from "react";
import {
    View,
    ScrollView,
    StyleSheet,
    Image, Dimensions,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, } from 'react-native-elements';
import MenuButton from '../Components/MenuButton';
import { IconButton, Colors, Button, } from 'react-native-paper';
import CustomHeader from '../Components/CustomHeader';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class Rank_Game extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Rank_Game",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../images/logo-small.png')}
                style={[styles.icon]}
            />

    })

    render() {
        return (

            // <Container>

            //     <CustomHeader
            //         title="Rank_Game"
            //         drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
            //     />
            //     <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            //         <Button
            //             full
            //             onPress={() => this.props.navigation.navigate('New_Game')}>
            //             <Text style={{ color: 'white' }}>Go to Home screen</Text>
            //         </Button>
            //     </Content>
            // </Container>

            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/back2.png")}
                    style={styles.image}>
                    <View style={styles.header}>
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            alignItems: "center",
                         }}
                            onPress={() => this.props.navigation.navigate("New_Join_Game")}>
                            {/* <Image source={require("../images/17.png")} style={styles.imageBack} /> */}
                            <Icon name="chevron-left" size={width*0.1094//45w
                            } color="#ffffff" 
                            />
                            {/* <Text style={{
                                color:'#ffffff',
                                fontSize:width * 0.0486, 
                                fontWeight:'bold'
                                }}>
                                Back
                            </Text> */}
                        </TouchableOpacity>
                        <MenuButton style={styles.menuAvatar}></MenuButton>
                    </View>
                    <View style={styles.Header_Rank_Top}>
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
                                <Image style={styles.imageTop2} source={require('../images/images.png')} />
                            </View>
                            <View>
                                <Text style={styles.nameTop2}>Name B</Text>
                            </View>
                            <View>
                                <Text style={styles.showWord}>15w</Text>
                            </View>
                        </View>

                        <View style={styles.Top1}>
                            <Icon name="crown" size={height * 0.043//30h
                            } color="#ffd700" />
                            <View style={{}}>
                                <Image style={styles.imageTop1} source={require('../images/bgg.png')} />
                            </View>
                            <View>
                                <Text style={styles.nameTop1}>Name A</Text>
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
                                <Image style={styles.imageTop3} source={require('../images/1.jpg')} />
                            </View>
                            <View>
                                <Text style={styles.nameTop3}>Name C</Text>
                            </View>
                            <View>
                                <Text style={styles.showWord}>10w</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 2, marginTop: 40, marginBottom: 10 }}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            <View style={styles.list_Rank}>
                                <View style={{}}>
                                    <Text style={styles.number_List_Rank}>4</Text>
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
                                            }} source={require('../images/1.jpg')} />
                                        </View>
                                        <View style={{ paddingLeft: 10 }}>
                                            <Text style={{
                                                fontSize: width * 0.0535,//22w
                                                color: "#f8f8fe",
                                            }}>Name D</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        paddingRight: 15,
                                        flexDirection: "row",
                                        justifyContent: 'flex-end'
                                    }}>
                                        <Text style={styles.showWord}>10w</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.list_Rank}>
                                <View style={{}}>
                                    <Text style={styles.number_List_Rank}>5</Text>
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
                                            }} source={require('../images/1.jpg')} />
                                        </View>
                                        <View style={{ paddingLeft: 10 }}>
                                            <Text style={{
                                                fontSize: width * 0.0535,//22w
                                                color: "#f8f8fe",
                                            }}>Name D</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        paddingRight: 15,
                                        flexDirection: "row",
                                        justifyContent: 'flex-end'
                                    }}>
                                        <Text style={styles.showWord}>10w</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.list_Rank}>
                                <View style={{}}>
                                    <Text style={styles.number_List_Rank}>6</Text>
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
                                            }} source={require('../images/1.jpg')} />
                                        </View>
                                        <View style={{ paddingLeft: 10 }}>
                                            <Text style={{
                                                fontSize: width * 0.0535,//22w
                                                color: "#f8f8fe",
                                            }}>Name D</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        paddingRight: 15,
                                        flexDirection: "row",
                                        justifyContent: 'flex-end'
                                    }}>
                                        <Text style={styles.showWord}>10w</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.list_Rank}>
                                <View style={{}}>
                                    <Text style={styles.number_List_Rank}>7</Text>
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
                                            }} source={require('../images/1.jpg')} />
                                        </View>
                                        <View style={{ paddingLeft: 10 }}>
                                            <Text style={{
                                                fontSize: width * 0.0535,//22w
                                                color: "#f8f8fe",
                                            }}>Name D</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        paddingRight: 15,
                                        flexDirection: "row",
                                        justifyContent: 'flex-end'
                                    }}>
                                        <Text style={styles.showWord}>10w</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.list_Rank}>
                                <View style={{}}>
                                    <Text style={styles.number_List_Rank}>8</Text>
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
                                            }} source={require('../images/1.jpg')} />
                                        </View>
                                        <View style={{ paddingLeft: 10 }}>
                                            <Text style={{
                                                fontSize: width * 0.0535,//22w
                                                color: "#f8f8fe",
                                            }}>Name D</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        paddingRight: 15,
                                        flexDirection: "row",
                                        justifyContent: 'flex-end'
                                    }}>
                                        <Text style={styles.showWord}>10w</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.list_Rank}>
                                <View style={{}}>
                                    <Text style={styles.number_List_Rank}>9</Text>
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
                                            }} source={require('../images/1.jpg')} />
                                        </View>
                                        <View style={{ paddingLeft: 10 }}>
                                            <Text style={{
                                                fontSize: width * 0.0535,//22w
                                                color: "#f8f8fe",
                                            }}>Name D</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        paddingRight: 15,
                                        flexDirection: "row",
                                        justifyContent: 'flex-end'
                                    }}>
                                        <Text style={styles.showWord}>10w</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>

            </View>
        )
    }

}

export default Rank_Game

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    header: {
        flexDirection: "row",
        paddingHorizontal: width * 0.0729,
        marginTop: height * 0.029,//20h 
        justifyContent: "space-between",
        alignItems: "center",
    },

    imageBack: {
        tintColor: "#fff",
        width: width * 0.0729,//30w
        height: height * 0.0292,//20h
    },
    menuAvatar: {
        flex: 1,
        width: width * 0.121,//50w
        height: height * 0.073,//50h
        borderRadius: 100
    },
    Header_Rank_Top: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:height*0.0146,
    },
    Top1: {
        alignItems: "center",
        flex: 1,
        flexDirection: 'column',

    },
    Top2: {
        alignItems: "center",
        flex: 1,
        flexDirection: 'column',
        marginTop: height*0.0292,
    },
    Top3: {
        alignItems: "center",
        flex: 1,
        flexDirection: 'column',
        marginTop: height*0.0292,
    },
    imageTop2: {
        shadowColor: '#000',
        shadowOpacity: 5.5,
        width: width*0.1827, //75w
        height: height*0.1098,//75h
        borderRadius: 50,
        borderWidth: width * 0.008,
        borderColor: '#dcdcdc'
    },
    imageTop1: {
        shadowColor: '#000',
        shadowOpacity: 5.5,
        width: width*0.2311,//95w
        height: height*0.13909,//95h
        borderRadius: 50,
        borderWidth: width * 0.008,
        borderColor: '#ffd700'
    },
    imageTop3: {
        shadowColor: '#000',
        shadowOpacity: 5.5,
        width: width*0.1827, //75w
        height: height*0.1098,//75h
        borderRadius: 50,
        borderWidth: width * 0.008,
        borderColor: '#cd853f'
    },
    showWord: {
        fontSize: width * 0.0535,//25w
        color: "#b1a7b9",
    },
    nameTop2: {
        fontSize: width * 0.0608,//25w
        color: "#dcdcdc",
        fontWeight: "bold"
    },
    nameTop1: {
        fontSize: width * 0.0608,//25w
        color: "#ffd700",
        fontWeight: "bold"
    },
    nameTop3: {
        fontSize: width * 0.0608,//25w
        color: "#cd853f",
        fontWeight: "bold"
    },
    buttonStyleBack: {
        width: width * 0.2433,
        borderRadius: 40,
        padding: height * 0.008,
        marginVertical: height * 0.029,//20h
        borderWidth: width * 0.006,
        borderColor: '#5450ba',
    },
    list_Rank: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: height*0.0292,
    },
    number_List_Rank: {
        color: "#5450ba",
        fontSize: width * 0.0608,//25w
    },
    card_list_Rank: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
        padding: width*0.0243,
        backgroundColor: "#5450ba",
        width: '80%',
        borderRadius: 50,
        elevation: 5,
    },
})