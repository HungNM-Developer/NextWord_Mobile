import React from 'react'
import { ListView } from 'react-native';
import { View, Text, TouchableHighlight, FlatList, ScrollView, Modal } from 'react-native';


export default class Modal_Word_List_Used extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         data: this.props.data,  
        }
    }
    render() {
        //console.log(this.state.data);
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.visible}
                swipeArea={50}
                onRequestClose={() => {
                    Alert.alert("Modal is closed");
                }}
            >
                <View style={{
                    flex: 1,
                    paddingHorizontal: 32,
                    alignSelf: "center",
                    marginTop: 200,
                    backgroundColor: "#FFF",
                    height: 386,
                    elevation: 1,
                    width: 270,
                    borderRadius: 15
                }}>
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 20,
                        alignItems: "center"
                    }}>
                        <ScrollView  style = {{flex: 1,backgroundColor: 'pink',}}>
                        {this.state.data.map((item,index) => {
                            //console.log("test ne "+ item);
                            <Text key={index}>{item}</Text>
                        })}
                        
                        </ScrollView>
                        {/* <Text>
                        
                        {this.props.data[this.props.data.length - 1 ]}
                    </Text> */}
                        {/* <FlatList
                            data={this.props.data}
                            renderItem={this.renderText}
                            keyExtractor = {(item, index) => index.toString()}
                        /> */}
                        
                    </View>
                    <TouchableHighlight
                        underlayColor="#6600bb"
                        style={{
                            width: 200,
                            marginLeft: 5,
                            elevation: 2,
                            marginTop: 25,
                            backgroundColor: "#44FEA1",
                            paddingVertical: 13,
                            borderRadius: 25,
                            alignSelf: "center"
                        }}
                        onPress={this.props.onPress}
                    >
                        <Text style={{
                            fontFamily: "RobotoBold",
                            color: "#FFF",
                            textAlign: "center",
                            fontSize: 18
                        }}>
                            Cancel
                   </Text>
                    </TouchableHighlight>
                </View>
            </Modal>
        )
    }
    renderText(text) {
        console.log(text);
        return <View><Text style={{
            fontFamily: "RobotoBold",
            color: "#4b3ca7",
            fontSize: 20
        }}>
            {text}
        </Text></View>
    }
}
