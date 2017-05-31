import React, { Component } from 'react';
import { connect } from 'react-redux';
import Classnames from 'classnames';
import { GridList, GridTile, IconButton, Subheader } from 'material-ui';
import { getHotel } from 'actions/hotel.action';
import storage from 'store2';
import DivBackImage from 'components-dumb/DivBackImage/DivBackImage'
import browserHistory from 'react-router/lib/browserHistory';

require('./hotel-list.less');

@connect((store) => {
    return {
        HotelList: store.hotelReducer.HotelList
    }
})

class HotelList extends Component {

    componentWillMount() {
        this.props.dispatch(getHotel());
    }

    _viewHotelDetail(id) {
        storage.session('hotel.id', id);
        browserHistory.push('/hotelDetail')
    }
    render() {
        return (
            <hotel-list class={Classnames(this.props.className)}>
                <div className='hotel-div'>
                        {
                            this.props.HotelList.map((item) => (
                                <div className='hotel-brief-con' key={item._id}>
                                    <GridTile className="hotel-img"
                                        onClick={() => this._viewHotelDetail(item._id)}
                                        title={item.HotelName}
                                    >
                                        <DivBackImage imgSrc={item.ImageUrl} />
                                    </GridTile>
                                </div>
                            ))
                        }
                </div>
            </hotel-list >
        );
    }
}

export default HotelList;