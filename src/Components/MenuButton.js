import React from 'react';

import { View, Text, Image, TouchableOpacity, Dimensions, Modal, } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import ModalCard from '../Components/Player/ModalCard';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


class MenuButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }
  _menu = null;

  // static navigationOptions = {
  //   title: 'MenuButton',
  // };
  setMenuRef = ref => {
    this._menu = ref;
  };


  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  // logoutClick = () => {
  //   this.hideMenu();
  //   GoogleSignin();
  // }

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      const userInfo = await GoogleSignin.signOut().then((user) => {
        // Remember to remove the user from your app's state as well
        this.props.navigation.navigate(
          'Home'
        );
      });
    } catch (error) {
      console.error(error);
    }
  };
  setModalVisible = (visible) => {

    this.setState({ modalVisible: visible });

  };

  render() {
    // const { navigate } = this.props.navigation;
    const { modalVisible } = this.state;
    //console.log('Check Avatar Menu Button ' + this.props.avatarURL);
    
    return (
      <View style={{}}>
        <TouchableOpacity onPress={() => this.showMenu()}>
          <Image
            source={{
              uri:
                this.props.avatarURL,
            }}
            style={{ width: width * 0.121, height: height * 0.073, borderRadius: 30, }}
          />
        </TouchableOpacity>
        <Menu
          ref={this.setMenuRef}
        >

          <MenuItem onPress={() => {
            this.setModalVisible(true);
          }}>Profile</MenuItem>
          
          <MenuItem onPress={this.signOut}>Log Out</MenuItem>
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal is closed");
              }}
            >
              <ModalCard
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              />
            </Modal>
          </View>
        </Menu>

      </View>

    );
  }
}

export default MenuButton;