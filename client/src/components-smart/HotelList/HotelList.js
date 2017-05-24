import React, { Component } from 'react';
import HotelItem from 'components-dumb/HotelItem/HotelItem';
import { connect } from 'react-redux';
import Classnames from 'classnames';
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
    viewHotelDetail(id){
        debugger;
        
    }
    render() {
        return (
            <hotel-list class={Classnames(this.props.className)}>
                <div className='hotel-div'>
                    <GridList cols={5}>
                    {this.props.hotelInfo.hotelList.map((item) => (
                        <GridTile
                        key={item._id}
                        title={item.hotelname}
                        actionIcon={<IconButton onClick={()=>this.viewHotelDetail(item._id)}><StarBorder color="white" /></IconButton>}
                        >
                        <img src={item.imageurl}/>
                        </GridTile>
                    ))}
                    </GridList>
                </div>
            </hotel-list>
        );
    }
}

export default HotelList;