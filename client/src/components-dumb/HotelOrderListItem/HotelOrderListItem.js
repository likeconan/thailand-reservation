import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, RaisedButton, GridTile } from 'material-ui';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import FontIcon from 'material-ui/FontIcon';
import { apply } from 'actions/apply.action';
import store from 'store';
import ApplyUserList from 'components-dumb/ApplyUserList/ApplyUserList';

class HotelOrderListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    apply = (id) => {
        store.dispatch(apply({
            roomId: id
        }));
    }

    showDetail = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        const room = this.props.room;
        const RoomInfo = (props) => (
            <div>
                <div>床位数量： {props.info.BedNum}</div>
                <div>详情：{props.info.BeadDetail}</div>
            </div>
        );
        return (
            <div key={room._id}>
                <Row className="show-grid">
                    <Col xs={4} md={2}>
                        <GridTile className="room-img"
                            title={room.RoomName}>
                            <img src={room.ImageUrl} />
                        </GridTile>
                    </Col>
                    <Col xs={6} md={8}>
                        <CardHeader className="bed-item"
                            title={room.RoomDetail}
                            subtitle={<RoomInfo info={room.BedDetail} />}
                        />
                    </Col>
                    <Col xs={4} md={2}>
                        <RaisedButton className="order-room"
                            label="预定"
                            primary={true}
                            onClick={() => this.apply(room._id)}
                            icon={<FavoriteBorder />}
                        />
                        <RaisedButton style={{ marginTop: '40px' }}
                            label="查看申请"
                            secondary={true}
                            onClick={this.showDetail}
                        />
                    </Col>
                </Row>
                <Row>
                    <ApplyUserList roomId={room._id} active={this.state.active} />
                </Row>
            </div>
        );
    }
}

export default HotelOrderListItem;