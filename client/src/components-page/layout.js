import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toast from 'components-smart/Toast/Toast';
import TopLogged from 'components-dumb/TopLogged/TopLogged';
import Classnames from 'classnames';

const styles = {
    main: {
        'position': 'fixed'
    }
};

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ifShow = window.location.pathname.indexOf('/login') < 0;
        return (
            <div>
                {
                    ifShow && <TopLogged />
                }
                <div className={Classnames({ 'layout-padding': ifShow })}>
                    {this.props.children}
                </div>

                <Toast />
            </div>
        );
    }
}

export default Layout;