import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Pages from 'components-page';
import store from './store';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

injectTapEventPlugin();

const customMui = getMuiTheme({
    stepper: {
        textColor: "rgba(255, 255, 255, 0.87)",
        disabledTextColor: "rgba(255, 255, 255, 0.26)"
    }
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={customMui}>
            <Router>
                <div>
                    {/*<Pages.Layout />*/}
                    <Route exact path="/" component={Pages.Login} />
                </div>
            </Router>
        </MuiThemeProvider>
    </Provider>

    , document.getElementById('root'));