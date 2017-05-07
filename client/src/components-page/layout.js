import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import Logged from './logged';
import LeftNav from './left.nav';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {drawerOpen: false}
    }
    clickLeftIconButton(){
         this.setState({
            drawerOpen: true,
            });
    }
    handleChangeRequestNavDrawer = (open) => {
        this.setState({
        drawerOpen: open,
        });
    };
    render() {
        return (
            <div>
                <AppBar title="Home"
                onLeftIconButtonTouchTap={this.clickLeftIconButton.bind(this)}
                iconElementRight={<Logged />}/>

                <LeftNav open={this.state.drawerOpen}
                onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}/>
            </div>
        );
    }
}

export default Layout;