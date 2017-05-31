import React, { Component } from 'react';
import Classnames from 'classnames';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, RaisedButton, GridTile } from 'material-ui';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import FontIcon from 'material-ui/FontIcon';
import { apply } from 'actions/apply.action';
import store from 'store';

require('./hotel-detail-hotel-order.less');

const RoomInfo = (props) => (
    <div>
        <div>床位数量： {props.info.BedNum}</div>
        <div>详情：{props.info.BeadDetail}</div>
    </div>
);

class HotelDetailHotelOrder extends Component {

    apply = (id) => {
        store.dispatch(apply());
    }

    render() {
        return (
            <hotel-detail class={Classnames(this.props.className)}>
                <div className='hotel-info'>
                    <Grid>
                        {this.props.roomList.map((room) => (
                            <Row className="show-grid" key={room._id}>
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
                                        secondary={true}
                                        onClick={() => this.apply(room._id)}
                                        icon={<FavoriteBorder />}
                                    />
                                </Col>
                            </Row>
                        ))}
                    </Grid>
                </div>
            </hotel-detail>
        );
    }
}

export default HotelDetailHotelOrder;