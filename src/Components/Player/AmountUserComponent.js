import React, { Component } from 'react'
import {Text} from 'react-native';
import io from "socket.io-client";
import {baseURL} from '../../shared/baseURL';
export default class AmountUserComponent extends Component {
    constructor(props)
    {
        super(this.props);
        this.state = {
            
         };
    }
    componentDidMount(){
        this.socket = io(baseURL);
        this.socket.on('turnUser', msg => {
            this.setState({
                
            })
        });
    };
    render() {
        return <Text> </Text>;
    }
}
