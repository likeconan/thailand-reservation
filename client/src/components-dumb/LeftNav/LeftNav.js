import React, { Component } from 'react';
import PropTypes from 'prop-types';
const SelectableList = makeSelectable(List);
import { spacing, typography, zIndex } from 'material-ui/styles';
import { blue500, red500, greenA200 } from 'material-ui/styles/colors';
import AccountBalance from 'material-ui/svg-icons/action/account-balance';
import {
    Drawer,
    MenuItem,
    AppBar,
    List, ListItem, makeSelectable
} from 'material-ui';

const styles = {
    logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: 'rgb(0, 188, 212)',
        paddingLeft: spacing.desktopGutter,
        marginBottom: 8,
    },
    icon: {
        marginRight: 10,
        color: typography.textFullWhite
    }
};

export default class LeftNav extends Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        onRequestChangeNavDrawer: PropTypes.func.isRequired
    };
    handleTouchTapHeader() {
        this.props.onRequestChangeNavDrawer(false);
    }
    render() {
        const { open, onRequestChangeNavDrawer } = this.props;
        return (
            <Drawer open={open}>
                <div style={styles.logo} onTouchTap={this.handleTouchTapHeader.bind(this)}>
                    <AccountBalance style={styles.icon} />ThailandHotel
                </div>
                <SelectableList>
                    <ListItem primaryText="Hotel" value="/hotel" href="/hotel" />
                    <ListItem primaryText="Users" value="/user" href="/user" />
                </SelectableList>
            </Drawer>
        );
    }
}