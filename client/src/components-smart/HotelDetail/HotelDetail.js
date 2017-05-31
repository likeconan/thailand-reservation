import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Classnames from 'classnames';
import {getHotelDetail } from 'actions/hotel.action';
import { connect } from 'react-redux';
import { Grid,Row,Col,Tabs,Tab } from 'react-bootstrap';

require('./hotel-detail.less');

@connect((store) => {
    return {
        HotelInfo: store.hotelReducer.HotelInfo
    }
})

class HotelDetail extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(getHotelDetail({_id :"5926e04ac6b02297fcda926c"}));
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
            <hotel-detail class={Classnames(this.props.className)}>
              <Card className='detail-div'>
                    <div className='hotel-top'>
                        <CardMedia
                            overlay={<CardTitle 
                            title={this.props.HotelInfo.HotelDetail.HotelName}
                            subtitle={this.props.HotelInfo.HotelDetail.HotelAddress}/>}>
                        <img src={this.props.HotelInfo.HotelDetail.ImageUrl} />
                        </CardMedia>
                    </div>
                    
                    
                    <div className='hotel-main container'>
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

                        <div className='hotel-info common-div'>
                            <Grid>
                                <Row className="show-grid">
                                <Col xs={4} md={2}>房源：</Col>
                                <Col xs={6} md={10}>
                                    <Row>
                                    <Col md={4}>
                                        可住：14
                                    </Col>
                                    <Col md={6}>
                                        入住时间：14:00 － 02:00（次日）
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col md={4}>
                                        卫生间：7
                                    </Col>
                                    <Col md={6}>
                                        退房时间：12:00
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col md={4}>
                                        卧室：7
                                    </Col>
                                    <Col md={6}>
                                        房源类型：独立屋
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col md={4}>
                                        床铺：7
                                    </Col>
                                    <Col md={6}>
                                        房屋类型：整套房子/公寓
                                    </Col>
                                    </Row>
                                </Col>
                                </Row>
                                <Row className="show-grid">
                                <Col xs={4} md={2}>便利设施：</Col>
                                <Col xs={6} md={10}>
                                    <Row>
                                    <Col md={4}>
                                        允许携带宠物
                                    </Col>
                                    <Col md={4}>
                                        厨房
                                    </Col>
                                    <Col md={4}>
                                        烟雾报警器
                                    </Col>
                                    <Col md={4}>
                                        无线网络
                                    </Col>
                                    <Col md={4}>
                                        适合举办活动
                                    </Col>
                                    </Row>
                                </Col>
                                </Row>
                                <Row className="show-grid">
                                <Col xs={4} md={2}>详细地址：</Col>
                                <Col xs={6} md={8}>
                                    Thierry的房源位于芭堤雅, Chonburi, 泰国
                                </Col>
                                </Row>
                                <Row className="show-grid">
                                <Col xs={4} md={2}>安全设施：</Col>
                                <Col xs={6} md={10}>
                                    <Row>
                                    <Col md={4}>
                                        一氧化碳报警器
                                    </Col>
                                    <Col md={4}>
                                        烟雾报警器
                                    </Col>
                                    </Row>
                                </Col>
                                </Row>
                                 <Row className="show-grid">
                                <Col xs={4} md={2}>房屋守则：</Col>
                                <Col xs={6} md={8}>
                                    Thank you for not smoking in the Villa (but of course, the garden awaits you with ashtrays).
In order to respect the sleep of the neighbors, he is not allowed to make noise outside after 21:00 (09:00 PM)
There is a deposit of 300 € on arrival (given back at checkout).
The price for the electricity is 8 bahts per Kwh.
The price for the water is 30 bahts per m3.
                                </Col>
                                </Row>
                            </Grid>
                        </div>
                    </div>
                </Card>
            </hotel-detail>
        );
    }
}

export default HotelDetail;