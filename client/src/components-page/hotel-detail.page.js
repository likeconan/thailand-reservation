import React, { Component } from 'react';
import Classnames from 'classnames';
import { connect } from 'react-redux';
import { getHotelDetail } from 'actions/hotel.action';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, FlatButton, GridTile } from 'material-ui';
import HotelDetailImage from 'components-smart/HotelDetailImage/HotelDetailImage';
import HotelDetailHotelInfo from 'components-smart/HotelDetailHotelInfo/HotelDetailHotelInfo';
import HotelDetailHotelOrder from 'components-smart/HotelDetailHotelOrder/HotelDetailHotelOrder';
import storage from 'store2';
import DivBackImage from 'components-dumb/DivBackImage/DivBackImage'

@connect((store) => {
    return {
        HotelDetail: store.hotelReducer.HotelDetail
    }
})

class HotelDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewHotelsInfo: true,
            orderHotelsRoom: false
        }
    }

    componentWillMount() {
        const hotelId = storage.session('hotel.id');
        this.props.dispatch(getHotelDetail({ _id: hotelId }));

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
                <div>
                    {
                        this.props.HotelDetail.ImageUrlList != undefined ?
                            <HotelDetailImage title={this.props.HotelDetail.HotelName}
                                imgUrlList={this.props.HotelDetail.ImageUrlList} />
                            :
                            ""
                    }
                </div>

                <div className='container'>
                    <CardTitle title={<div>{this.props.HotelDetail.HotelName} <span style={{fontSize:14, fontWeight:'bold'}}>({this.props.HotelDetail.OpenData} 至 {this.props.HotelDetail.EndData})</span></div>} />
                    <CardText>
                        {this.props.HotelDetail.HotelAddress}
                    </CardText>
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
                    {
                        this.state.viewHotelsInfo ?
                            <HotelDetailHotelInfo
                                info={this.props.HotelDetail} />
                            :
                            ""
                    }
                    {
                        this.state.orderHotelsRoom ?
                            <HotelDetailHotelOrder
                                roomList={this.props.HotelDetail.RoomList} />
                            :
                            ""
                    }
                </div>
            </div>
        );
    }
}

export default HotelDetailPage;