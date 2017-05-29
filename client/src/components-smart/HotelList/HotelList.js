import React, { Component } from 'react';
import HotelItem from 'components-dumb/HotelItem/HotelItem';
import { connect } from 'react-redux';
import Classnames from 'classnames';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import {getHotel } from 'actions/hotel.action';

require('./hotel-list.less');

@connect((store) => {
    return {
        HotelInfo: store.hotelReducer.HotelInfo
    }
})

class HotelList extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(getHotel());
    }
    _viewHotelDetail(id){
       const location = {
            pathname: '/hotelDetail'
                };
       history.push(location)
    }
    render() {
        const { match, location, history } = this.props
        return (
            <hotel-list class={Classnames(this.props.className)}>
                <div className='hotel-div'>
                    <GridList cols={5}>
                    {this.props.HotelInfo.HotelList.map((item) => (
                        <GridTile
                        key={item._id}
                        title={item.HotelName}
                        actionIcon={<IconButton onClick={()=>this._viewHotelDetail(item._id)}><StarBorder color="white" /></IconButton>}
                        >
                        <img src={item.ImageUrl}/>
                        </GridTile>
                    ))}
                    </GridList>
                </div>
            </hotel-list>
        );
    }
}

export default HotelList;