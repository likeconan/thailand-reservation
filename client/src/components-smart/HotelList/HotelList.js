import React, { Component } from 'react';
import HotelItem from 'components-dumb/HotelItem/HotelItem';
import { connect } from 'react-redux';

require('./hotel-list.less');

@connect((store) => {
    return {
        data: store.hotelReducer.hotels
    }
})
class HotelList extends Component {
    render() {
        const eles = this.props.data.map((val, key) => {
            return <HotelItem data={val} key={key} />
        })

        return (
            <hotel-list>
                <h2>This is a hotel list </h2>
                {eles}
            </hotel-list>
        );
    }
}

export default HotelList;