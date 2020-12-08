import React, { Component } from 'react';
import {Dimensions ,Text, StyleSheet} from 'react-native';
import {socket} from '../../screens/New_Join_Game';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default class TimeComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            time: 10
        }
        socket.on('time', time => {
            this.setState(
                {time: time}
            )
        })
    }

    render() {
       
        return (
            <Text style = {style.textCount}>
                Time: {this.state.time}
            </Text>
        )
    }
}

const style = StyleSheet.create({

    textCount: {
        fontSize: width * 0.0851,//35w
        borderRadius: 100,
        backgroundColor: "#fff",
        color: "#5454bd",
        padding: height * 0.0219,//15h
        elevation: 5,
    },
})
