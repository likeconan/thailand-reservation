import React, { Component } from 'react';
import {
    Drawer,
    MenuItem
} from 'material-ui';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { List, ListItem, makeSelectable } from 'material-ui/List';
const SelectableList = makeSelectable(List);
import { spacing, typography, zIndex } from 'material-ui/styles';

import { blue500, red500, greenA200 } from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const HomeIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
);

const styles = {
    logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: 'rgb(76, 175, 80)',
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
                    <HomeIcon style={styles.icon} />ThailandHotel
                </div>
                <SelectableList>
                    <ListItem primaryText="Hotel" value="/hotel" href="/hotel" />
                    <ListItem primaryText="Users" value="/user" href="/user" />
                </SelectableList>
            </Drawer>
        );
    }
}