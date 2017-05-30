import React, { Component } from 'react';
import { connect } from 'react-redux';
import Classnames from 'classnames';
import {GridList, GridTile,IconButton,Subheader} from 'material-ui';
import { Grid,Row,Col,Tabs,Tab } from 'react-bootstrap';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import {getHotel } from 'actions/hotel.action';
import storage from 'store2';

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
        storage.session('hotel.id', id);
        window.location.replace('/hotelDetail');
    }
    render() {
        const { match, location, history } = this.props
        return (
            <hotel-list class={Classnames(this.props.className)}>
                <div className='hotel-div'>
                    <Row className="show-grid">
                        {this.props.HotelInfo.HotelList.map((item) => (
                            <Col md={2} key={item._id}>
                                <GridTile className="hotel-img"
                                title={item.HotelName}
                                actionIcon={<IconButton onClick={()=>this._viewHotelDetail(item._id)}><StarBorder color="white" /></IconButton>}
                                >
                                <img src={item.ImageUrl}/>
                                </GridTile>
                            </Col>
                        ))}
                    </Row>
                </div>
            </hotel-list>
        );
    }
}

export default HotelList;