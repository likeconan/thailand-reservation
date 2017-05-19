import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Pages from 'components-page';
import store from './store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'


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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    store.getState().userReducer.isAuthorize ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <div>
          <Pages.Layout>
            <PrivateRoute path="/" component={Pages.Approve} />
            <Route path="/hotels" component={Pages.Hotel} />
            <Route exact path="/login" component={Pages.Login} />
          </Pages.Layout>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));

