import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Pages from 'components-page';
import store from './store';
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import browserHistory from 'react-router/lib/browserHistory';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Microsoft Yahei, sans-serif',
});

const customMui = getMuiTheme({
  stepper: {
    textColor: "rgba(255, 255, 255, 0.87)",
    disabledTextColor: "rgba(255, 255, 255, 0.26)"
  }
});


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route component={Pages.Layout}>
          <Route path="/" component={Pages.HotelList} />
          <Route path="/approve" component={Pages.ApprovePage} />
          <Route path="/hotelDetail" component={Pages.HotelDetail} />
          <Route path="/login" component={Pages.Login} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));

