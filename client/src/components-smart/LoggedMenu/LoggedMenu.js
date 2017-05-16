import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class LoggedMenu extends Component{
   render(){
       return (
        <IconMenu
            iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
            <MenuItem primaryText="Users" />
            <MenuItem primaryText="Sign out" />
        </IconMenu>
       );   
    }
}