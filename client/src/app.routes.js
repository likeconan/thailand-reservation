import React, { Component } from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Pages from './components-page';

class AppRoutes extends Component {
    render() {
        return(
            <Route path="/" component={Pages.Layout}>
                <IndexRoute component={Pages.Layout} />
                <Route path="user" component={Pages.Users} />
                <Redirect from="get-started" to="/get-started/required-knowledge" />
                <Route path="get-started">
                <Route path="required-knowledge" component={RequiredKnowledge} />
                <Route path="installation" component={Installation} />
                </Route>
            </Route>
        );
    }
}

export default AppRoutes;

// const AppRoutes = (
//   <Route path="/" component={Pages.Layout}>
//     <IndexRoute component={Pages.Layout} />
//     <Route path="user" component={Pages.Users} />
    
//   </Route>
// );

// export default AppRoutes;
