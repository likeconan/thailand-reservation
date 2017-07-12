import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import moment from 'moment';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { getAppliersByRoomId, approveUsers } from 'actions/apply.action';
import Classnames from 'classnames';
import store from 'store';
import RaisedButton from 'material-ui/RaisedButton'

require('./apply-user-list.less');

class ApplyUserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            applyUsers: [],
            approvedUsers: []
        }
        this.approvedList = [];
    }

    componentWillMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        getAppliersByRoomId(this.props.roomId).then((list) => {
            this.setState({
                applyUsers: list.filter((val) => {
                    return val.status == 'applying'
                }),
                approvedUsers: list.filter((val) => {
                    return val.status == 'approved'
                })
            });
        })
    }

    checkedUser = (checked, id) => {
        if (checked) {
            this.approvedList.push(id);
        } else {
            this.approvedList = this.approvedList.filter((val) => {
                return val !== id;
            });
        }
    }

    approveUsers = () => {
        store.dispatch(approveUsers(this.approvedList, this.loadUsers));
    }

    render() {
        return (
            <div className={Classnames('user-list-con', { 'active': this.props.active })}>
                <div>
                    <h5>申请中的：</h5>
                    <Divider />
                    {
                        this.state.applyUsers.length > 0 ?
                            (
                                <div>
                                    <List>
                                        {
                                            this.state.applyUsers.map((val, key) => {
                                                return (<ListItem primaryText={val.applyEmail}
                                                    key={key}
                                                    secondaryText={moment(val.createdAt).format('YYYY-MM-DD hh:mm')}
                                                    leftCheckbox={this.userRole ? <Checkbox onCheck={(event, checked) => { this.checkedUser(checked, val._id) }} /> : null}
                                                    rightAvatar={<Avatar>{val.applyEmail.charAt(0).toUpperCase()}</Avatar>} />);
                                            })
                                        }
                                    </List>
                                    <RaisedButton
                                        label="同意勾选的申请"
                                        onClick={this.approveUsers}
                                        primary={true} />
                                </div>

                            )
                            :
                            <small className='grey-text'>暂时没有申请的</small>
                    }
                </div>
                <div>
                    <h5>审核通过的</h5>
                    <Divider />
                    {
                        this.state.approvedUsers.length > 0 ?
                            <List>
                                {
                                    this.state.approvedUsers.map((val, key) => {
                                        return (<ListItem primaryText={val.applyEmail}
                                            key={key}
                                            secondaryText={moment(val.createdAt).format('YYYY-MM-DD hh:mm')}
                                            rightAvatar={<Avatar>{val.applyEmail.charAt(0).toUpperCase()}</Avatar>} />);
                                    })
                                }
                            </List>
                            :
                            <small className='grey-text'>暂时没有审核通过的</small>
                    }

                </div>
            </div>
        );
    }
}

export default ApplyUserList;