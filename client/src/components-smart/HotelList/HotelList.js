import React, { Component } from 'react';
import HotelItem from 'components-dumb/HotelItem/HotelItem';
import { connect } from 'react-redux';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import {gethotel } from 'actions/hotel.action';

require('./hotel-list.less');

@connect((store) => {
    return {
        hotelInfo: store.hotelReducer.hotelInfo
    }
})
class HotelList extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(gethotel());
    }
    render() {
        return (
              <div>
                <GridList cols={5}>
                {this.props.hotelInfo.hotelList.map((item) => (
                    <GridTile
                    key={item.imageurl}
                    title={item.hotelname}
                    subtitle={<span>by <b>{item.hotelname}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                    <img src={item.imageurl} />
                    </GridTile>
                ))}
                </GridList>
            </div>
        );
    }
}

export default HotelList;