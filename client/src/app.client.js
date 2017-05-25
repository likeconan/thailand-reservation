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
  Redirect
} from 'react-router-dom'
import { routeAuthorize } from 'utilities/authorize';
import history from 'utilities/history';

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
  <Route {...rest} render={
    props => {
      var route = routeAuthorize(location.pathname);
      debugger
      var ele = route ?
        (
          <Redirect to={{
            pathname: route,
            state: { from: props.location }
          }} />
        )
        :
        (
          <Component {...props} />
        )

      return ele;
    }} />
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history}>
        <div>
          <Pages.Layout>
            <PrivateRoute path="/" component={Pages.Approve} />
            <PrivateRoute path="/approve" component={Pages.Approve} />
            <Route path="/hotels" component={Pages.Hotel} />
            <Route exact path="/login" component={Pages.Login} />
          </Pages.Layout>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));

