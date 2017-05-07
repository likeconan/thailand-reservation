import React, { Component } from 'react';
import {
    Drawer,
    MenuItem
} from 'material-ui';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import {List, ListItem, makeSelectable} from 'material-ui/List';
const SelectableList = makeSelectable(List);

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 24
  }
};

export default class LeftNav extends Component{
    static propTypes = {
        open: PropTypes.bool.isRequired,
        onRequestChangeNavDrawer:PropTypes.func.isRequired
    };
    handleTouchTapHeader(){
        this.props.onRequestChangeNavDrawer(false);
    }
    render(){
        const {
        open,
        onRequestChangeNavDrawer
        } = this.props;
        return (
            <Drawer open={open}>
                <div style={styles.logo} onTouchTap={this.handleTouchTapHeader.bind(this)}>
                ThailandApp
                </div>
                <SelectableList>
                    <ListItem primaryText="Hotel" value="/hotel" href="/hotel" />
                    <ListItem primaryText="Users" value="/user" href="/user"/>
                </SelectableList>
            </Drawer>
        );
    }
}