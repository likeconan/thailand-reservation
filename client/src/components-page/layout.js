import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Logged from './logged';
import LeftNav from './left.nav';

import { Row, Col } from 'react-bootstrap';

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
             <LeftNav open={this.state.drawerOpen}
                    onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}/>
            <AppBar title="Home"
                    onLeftIconButtonTouchTap={this.clickLeftIconButton.bind(this)}
                    iconElementRight={<Logged />}/>
            </div>
        );
    }
}

export default Layout;