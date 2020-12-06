import React from 'react';

import { View, Text, Image, TouchableOpacity,Dimensions } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


class MenuButton extends React.PureComponent {
    constructor(props)
    {
        super(props);
    }
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    //console.log('Check Avatar Menu Button ' + this.props.avatarURL);
    return (
      <View style={{}}>
          <TouchableOpacity onPress={() => this.showMenu()}>
               <Image
                source={{
                  uri:
                    this.props.avatarURL,
                }}
                style={{width:width*0.121, height:height*0.073, borderRadius: 30,}}
              />
                </TouchableOpacity>
        <Menu
          ref={this.setMenuRef}
        //   button={
            
        // }
        >
        
        <MenuItem onPress={this.hideMenu}>Profile</MenuItem>
          <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={this.hideMenu} disabled>
            Menu item 3
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>Log Out</MenuItem>
         
        </Menu>
      </View>
    );
  }
}

export default MenuButton;