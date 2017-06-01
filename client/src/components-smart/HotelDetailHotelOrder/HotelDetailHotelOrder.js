import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import HotelOrderListItem from 'components-dumb/HotelOrderListItem/HotelOrderListItem'
import Classnames from 'classnames';
require('./hotel-detail-hotel-order.less');

class HotelDetailHotelOrder extends Component {


    render() {
        return (
            <hotel-detail class={Classnames(this.props.className)}>
                <div className='hotel-info'>
                    <Grid>
                        {
                            this.props.roomList.map((room, key) => (
                                <HotelOrderListItem room={room} key={key} />
                            ))}
                    </Grid>
                </div>
            </hotel-detail>
        );
    }
}

export default HotelDetailHotelOrder;