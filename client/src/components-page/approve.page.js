import React, { Component } from 'react';
import ApplyUserList from 'components-dumb/ApplyUserList/ApplyUserList';

class ApprovePage extends Component {
    render() {
        return (
            <div>
                <ApplyUserList title='待审核的' />
            </div>
        );
    }
}

export default ApprovePage;