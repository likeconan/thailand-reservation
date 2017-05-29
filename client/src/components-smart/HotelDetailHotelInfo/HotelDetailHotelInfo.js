import React, { Component } from 'react';
import Classnames from 'classnames';
import { Grid,Row,Col,Tabs,Tab } from 'react-bootstrap';

require('./hotel-detail-hotel-info.less');

class HotelDetailHotelInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <hotel-detail class={Classnames(this.props.className)}>
              <div className='hotel-info'>
                    <Grid>
                        <Row className="show-grid">
                        <Col xs={4} md={2}>房源：</Col>
                        <Col xs={6} md={10}>
                            <Row>
                            <Col md={4}>
                                可住：{this.props.info.Accommodates}
                            </Col>
                            <Col md={6}>
                                入住时间：{this.props.info.LiveDate}
                            </Col>
                            </Row>
                            <Row>
                            <Col md={4}>
                                卫生间：{this.props.info.Bathrooms}
                            </Col>
                            <Col md={6}>
                                退房时间：{this.props.info.LiveDate}
                            </Col>
                            </Row>
                            <Row>
                            <Col md={4}>
                                卧室：{this.props.info.Beds}
                            </Col>
                            <Col md={6}>
                                房源类型：{this.props.info.HotelFrom}
                            </Col>
                            </Row>
                            <Row>
                            <Col md={4}>
                                床铺：{this.props.info.Bedrooms}
                            </Col>
                            <Col md={6}>
                                房屋类型：{this.props.info.HotelType}
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
                            {this.props.info.HotelAddress}
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
                            {this.props.info.HotelRule}
                        </Col>
                        </Row>
                    </Grid>
                        </div>
            </hotel-detail>
        );
    }
}

export default HotelDetailHotelInfo;