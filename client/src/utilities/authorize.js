import store from 'store';

export function routeAuthorize(path) {
    var user = store.getState().userReducer;
    var isAuthorize = user.loggedUser.isAuthorize;
    var role = user.loggedUser.role;
    var path = '';
    if (isAuthorize) {
        if (path.indexOf('/login') >= 0) {
            path = '/';
        } else {
            //need to do with other pages in different roles
        }

    } else {
        path = '/login'
    }
    return path;
}

export function setAuthorizeToken() {

}
