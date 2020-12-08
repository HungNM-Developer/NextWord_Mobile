import React, { Component } from 'react';
import {Text, ScrollView} from 'react-native';
 
export default class ListUser extends Component {
    render() {
        return (
            <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{
                            marginVertical: 5,
                        }}
                    >
                        <ListCard_PlayGame

                        />
                        <ListCard_PlayGame

                        />

                        <ListCard_PlayGame

                        />
                        <ListCard_PlayGame

                        />
                        <ListCard_PlayGame

                        />


                    </ScrollView>
        )
    }
}
