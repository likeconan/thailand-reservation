import React, { Component } from 'react';
import FullBackground from 'components-dumb/FullBackground/FullBackground'
import UserLogin from 'components-smart/UserLogin/UserLogin'


class LoginPage extends Component {
   
    render() {
        return (
            <div>
                <FullBackground src='./src/assets/images/shutterstock-bangkok-thailand-back.jpg'>
                    <UserLogin />
                </FullBackground>
            </div>
        );
    }
}

export default LoginPage;