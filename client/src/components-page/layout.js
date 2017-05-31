import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import LoggedMenu from 'components-smart/LoggedMenu/LoggedMenu';
import Toast from 'components-smart/Toast/Toast';
import LeftNav from 'components-dumb/LeftNav/LeftNav';
import history from 'utilities/history';

const styles = {
    main: {
        'position': 'fixed'
    }
};

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: false }

    }



    clickLeftIconButton() {
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
        const ifShow = history.location.pathname.indexOf('/login') < 0;
        return (
            <div className='layout'>
                <LeftNav open={this.state.drawerOpen}
                    onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer} />
                {
                    ifShow &&
                    <AppBar title="Welcome"
                        onLeftIconButtonTouchTap={this.clickLeftIconButton.bind(this)}
                        iconElementRight={<LoggedMenu />} />
                }
                <Toast />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;