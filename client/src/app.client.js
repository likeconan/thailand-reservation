import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';

import Pages from './components-page';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Provider store={store}>
             <Router>
                <div>
                    <Route path = "/" component={Pages.Layout} />
                    <Route path = "/hotel" component={Pages.Hotel.HotelList} />
                    <Route path = "/user" component = {Pages.Users.UserList}/> 
                    <Route path = "/login" component = {Pages.login}/> 
                </div>
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'));