import React, { Component } from 'react';
import Classnames from 'classnames';
import { connect } from 'react-redux';
import { getHotelDetail } from 'actions/hotel.action';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText,FlatButton} from 'material-ui';
import HotelDetailImage from 'components-smart/HotelDetailImage/HotelDetailImage';
import HotelDetailHotelInfo from 'components-smart/HotelDetailHotelInfo/HotelDetailHotelInfo';
import HotelDetailHotelOrder from 'components-smart/HotelDetailHotelOrder/HotelDetailHotelOrder';
import storage from 'store2';

const styles = {
    main: {
        'position': 'absolute',
        'width': '100%',
        'margin-top': '64px'
    }
};

@connect((store) => {
    return {
        HotelInfo: store.hotelReducer.HotelInfo
    }
})

class HotelDetailPage extends Component {
    constructor(props) {
        super(props);
        const hotelId = storage.session('hotel.id');
        this.props.dispatch(getHotelDetail({_id :hotelId}));
        this.state = {
            viewHotelsInfo: true,
            orderHotelsRoom:false
        }
    }
    _viewHotelInfo = () =>{
        this.setState({
            viewHotelsInfo: true,
            orderHotelsRoom:false
        });
    }
    _orderHotel= () =>{
        this.setState({
            viewHotelsInfo: false,
            orderHotelsRoom: true
        });
    }
    render() {
        return (
            <div style={styles.main}>
                <HotelDetailImage 
                title={this.props.HotelInfo.HotelDetail.HotelName}
                subtitle={this.props.HotelInfo.HotelDetail.HotelAddress}
                img={this.props.HotelInfo.HotelDetail.ImageUrl}/>

                <div className='container'>
                    <CardTitle title={this.props.HotelInfo.HotelDetail.HotelName}/>
                    <CardText>
                    <div dangerouslySetInnerHTML={{__html: this.props.HotelInfo.HotelDetail.HotelRemark}}/>
                    </CardText>

                    <CardActions>
                        <FlatButton label="详情" 
                        onClick={this._viewHotelInfo} 
                        primary={this.state.viewHotelsInfo} 
                        />
                        <FlatButton label="订阅" 
                        onClick={this._orderHotel} 
                        secondary={this.state.orderHotelsRoom}/>
                    </CardActions>
                    {this.state.viewHotelsInfo? <HotelDetailHotelInfo 
                        info ={this.props.HotelInfo.HotelDetail}/>:""} 
                    {this.state.orderHotelsRoom? <HotelDetailHotelOrder 
                        roomList={this.props.HotelInfo.HotelDetail.RoomList}/>:""}   
                </div>  
            </div>
        );
    }
}

export default HotelDetailPage;