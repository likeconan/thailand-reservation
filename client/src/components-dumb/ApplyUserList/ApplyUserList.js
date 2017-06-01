import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import moment from 'moment';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

require('./apply-user-list.less');

class ApplyUserList extends Component {
    render() {
        var data = [{ email: 'liyijia@shinetech.com', createdAt: new Date() }, { email: 'tianyan@shinetech.com', createdAt: new Date() }]
        const items = data.map((val, key) => {
            return (<ListItem primaryText={val.email}
                secondaryText={moment(val.createdAt).format('YYYY-MM-DD hh:mm')}
                rightAvatar={<Avatar>L</Avatar>}
                leftCheckbox={<Checkbox />} />);
        })
        return (
            <div className='user-list-con'>
                <h3>{this.props.title}</h3>
                <Divider />
                <List>
                    {items}
                </List>
            </div>
        );
    }
}

export default ApplyUserList;