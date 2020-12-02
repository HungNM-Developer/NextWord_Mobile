import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from '../Components/CustomHeader'

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

            <Container>

                <CustomHeader
                    title="Rank_Game"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Button
                        full
                        onPress={() => this.props.navigation.navigate('New_Game')}>
                        <Text style={{ color: 'white' }}>Go to Home screen</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

}

export default Rank_Game

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})