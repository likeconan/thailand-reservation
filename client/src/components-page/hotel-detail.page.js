import React, { Component } from 'react';
import Classnames from 'classnames';
import { connect } from 'react-redux';
import { getHotelDetail } from 'actions/hotel.action';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, FlatButton } from 'material-ui';
import HotelDetailImage from 'components-smart/HotelDetailImage/HotelDetailImage';
import HotelDetailHotelInfo from 'components-smart/HotelDetailHotelInfo/HotelDetailHotelInfo';
import HotelDetailHotelOrder from 'components-smart/HotelDetailHotelOrder/HotelDetailHotelOrder';
import storage from 'store2';

@connect((store) => {
    return {
        HotelDetail: store.hotelReducer.HotelDetail
    }
})

class HotelDetailPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const hotelId = storage.session('hotel.id');
        this.props.dispatch(getHotelDetail({ _id: hotelId }));
        this.state = {
            viewHotelsInfo: true,
            orderHotelsRoom: false
        }
    }

    _viewHotelInfo = () => {
        this.setState({
            viewHotelsInfo: true,
            orderHotelsRoom: false
        });
    }
    _orderHotel = () => {
        this.setState({
            viewHotelsInfo: false,
            orderHotelsRoom: true
        });
    }
    render() {
        return (
            <div>
                <HotelDetailImage
                    title={this.props.HotelDetail.HotelName}
                    subtitle={this.props.HotelDetail.HotelAddress}
                    img={this.props.HotelDetail.ImageUrl} />

                <div className='container'>
                    <CardTitle title={this.props.HotelDetail.HotelName} />
                    <CardText>
                        <div dangerouslySetInnerHTML={{ __html: this.props.HotelDetail.HotelRemark }} />
                    </CardText>

                    <CardActions>
                        <FlatButton label="详情"
                            onClick={this._viewHotelInfo}
                            primary={this.state.viewHotelsInfo}
                        />
                        <FlatButton label="订阅"
                            onClick={this._orderHotel}
                            secondary={this.state.orderHotelsRoom} />
                    </CardActions>
                    {this.state.viewHotelsInfo ? <HotelDetailHotelInfo
                        info={this.props.HotelDetail} /> : ""}
                    {this.state.orderHotelsRoom ? <HotelDetailHotelOrder
                        roomList={this.props.HotelDetail.RoomList} /> : ""}
                </div>
            </div>
        );
    }
}

export default HotelDetailPage;