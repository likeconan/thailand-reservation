import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {green500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';
import Pages from './components-page';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: green500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: green500,
    shadowColor: fullBlack,
  },
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
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