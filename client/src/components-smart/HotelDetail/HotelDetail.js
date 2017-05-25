import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Classnames from 'classnames';
import {getHotelDetail } from 'actions/hotel.action';
import { connect } from 'react-redux';

require('./hotel-detail.less');

@connect((store) => {
    return {
        HotelInfo: store.hotelReducer.HotelInfo
    }
})

class HotelDetail extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(getHotelDetail({_id :"5926a8b6115a5bfd23a0f70d"}));
    }
    render() {
        return (
            <hotel-detail class={Classnames(this.props.className)}>
              <Card className='detail-div'>
                    <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
                    <img src={this.props.HotelInfo.HotelDetail.ImageUrl} />
                    </CardMedia>
                    
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    
                    <CardText>
                    {this.props.HotelInfo.HotelDetail.HotelName}
                    </CardText>

                    <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                    </CardActions>
                </Card>
            </hotel-detail>
        );
    }
}

export default HotelDetail;