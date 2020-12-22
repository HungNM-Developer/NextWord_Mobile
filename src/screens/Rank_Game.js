import React, { Component } from "react";
import {
    View,
    ScrollView,
    StyleSheet,
    Image, Dimensions,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, } from 'react-native-elements';
import MenuButton from '../Components/MenuButton';
import { IconButton, Colors, Button, } from 'react-native-paper';
import CustomHeader from '../Components/CustomHeader';
import { connect } from "react-redux";
import { fetchRank } from '../redux/action/RankAction';
import Waiting_Rank from "./Waiting_Rank";
import { Room } from "../models/Room";
import Rank_Cart from "../Components/Rank_Game/Rank_Cart";
import { FlatList } from "react-native-gesture-handler";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const mapDispatchToProps = dispatch => ({
    fetchRank: (rid) => dispatch(fetchRank(rid))
})
const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        rank: state.rankReducer.rank
    }
};
class Rank_Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user1: "",
            user2: '',
            user3: '',
            user4: '',
            users: [],
        }
    }
    
    async componentDidMount() {
        console.log(this.props.route.params.rid);
        await this.props.fetchRank(this.props.route.params.rid);
        //console.log(this.props.rank)
        this.props.rank.users.sort((a, b) => a.places - b.places);
        //console.log("test");
        //console.log(this.props.rank.users[0].name);
        //fix error can not get undifine array object
        let rank = this.props.rank;
        this.setState({
            user1: rank.users[0],
            length1: rank.users[0].word.length,
            user2: rank.users[1],
            length2: rank.users[1].word.length,
            users: rank.users,
            // user3: rank.users[2],
            // length3: rank.users[2].word.length,
        });
        if(!rank.users[2])
        {
            this.setState({
                user3: rank.users[2],
                length3: rank.users[2].word.length,
            });
        }    
    }

    static navigationOptions = ({ navigation }) => ({
        title: "Rank_Game",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../images/logo-small.png')}
                style={[styles.icon]}
            />
    })
    renderCart(item,index){
        return <Rank_Cart item={item} index={index}></Rank_Cart>
    }
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
                        <View>
                            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                        </View>
                        <View style={styles.header}>
                            <TouchableOpacity style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                                onPress={() => this.props.navigation.navigate("New_Join_Game")}>
                                {/* <Image source={require("../images/17.png")} style={styles.imageBack} /> */}
                                <Icon name="chevron-left" size={width * 0.1094//45w
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
                            <MenuButton avatarURL={this.props.user.photo}
                                navigation={this.props.navigation}></MenuButton>
                            {/* <MenuButton style={styles.menuAvatar}></MenuButton> */}
                        </View>
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
                                    <Image style={styles.imageTop2} source={{uri:this.state.user2.photo}} />
                                </View>
                                <View>
                                    <Text style={styles.nameTop2}>{this.state.user2.name}</Text>
                                </View>
                                <View>
                                    <Text style={styles.showWord}>{this.state.length2}w</Text>
                                </View>
                            </View>

                            <View style={styles.Top1}>
                                <Icon name="crown" size={height * 0.043//30h
                                } color="#ffd700" />
                                <View style={{}}>
                                    <Image style={styles.imageTop1} source={{uri:this.state.user1.photo}} />
                                </View>
                                <View>
                                    <Text style={styles.nameTop1}>{this.state.user1.name}</Text>
                                </View>
                                <View>
                                    <Text style={styles.showWord}>{this.state.length1}w</Text>
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
                                    <Image style={styles.imageTop3} source={{uri:this.state.user3.photo ? this.state.user3.photo : ""}} />
                                </View>
                                <View>
                                    <Text style={styles.nameTop3}>{this.state.user3.name ? this.state.user3.name : ""}</Text>
                                </View>
                                <View>
                                    <Text style={styles.showWord}>{this.state.length3 ? this.state.length3 : ""}w</Text>
                                </View>
                            </View>
                        </Animatable.View>

                        <View style={{ flex: 2, marginTop: 40, }}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}>
                                <FlatList
                                 data = {this.state.users}
                                 renderItem={this.renderCart}
                                 keyExtractor={item => item.id}
                                 >
                                     </FlatList>
                            </ScrollView>
                        </View>
                    </ImageBackground>
                </View>
            )
        }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Rank_Game)

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
        paddingHorizontal: width * 0.073,
        paddingTop: height * 0.0585,//40h 
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
        marginTop: height * 0.0292,
    },
    Top3: {
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
    imageTop1: {
        shadowColor: '#000',
        shadowOpacity: 5.5,
        width: width * 0.2311,//95w
        height: width * 0.2311,//95w
        borderRadius: 50,
        borderWidth: width * 0.008,
        borderColor: '#ffd700'
    },
    imageTop3: {
        shadowColor: '#000',
        shadowOpacity: 5.5,
        width: width * 0.1827, //75w
        height: width * 0.1827, //75w
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
})