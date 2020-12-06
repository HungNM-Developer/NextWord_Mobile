import React from 'react';

import { View, Text, Image, TouchableOpacity  } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

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
                style={{width: 45, height: 45, borderRadius: 30,}}
              />
                </TouchableOpacity>
        <Menu
          ref={this.setMenuRef}
        //   button={
            
        // }
        >
        
        <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
          <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={this.hideMenu} disabled>
            Menu item 3
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
         
        </Menu>
      </View>
    );
  }
}

export default MenuButton;