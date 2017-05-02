import React from 'react';
import ReactDOM from 'react-dom';
import Pages from 'components-page';
import store from './store';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                {/*<Pages.Layout />*/}
                <Route exact path="/" component={Pages.Login} />
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('root'));