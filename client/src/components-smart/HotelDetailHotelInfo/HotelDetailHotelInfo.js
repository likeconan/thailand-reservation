import React, { Component } from 'react';
import Classnames from 'classnames';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';

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
                                    {this.props.info.UsefulFacilities.map((item) => (
                                        <Col md={4} key={item.UsefulItem}>{item.UsefulItem}</Col>
                                    ))}
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
                                    {this.props.info.SafeFacilities.map((item) => (
                                        <Col md={4} key={item.SafeItem}>{item.SafeItem}</Col>
                                    ))}
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