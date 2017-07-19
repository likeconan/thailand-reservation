import React, { Component } from 'react';
import { GridTile } from 'material-ui';
import Classnames from 'classnames';
import DivBackImage from 'components-dumb/DivBackImage/DivBackImage'
require('./hotel-detail-image.less');
import Slider from 'react-slick'

class HotelDetailImage extends React.Component {
    render = () => {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <Slider {...settings}>
                {
                    this.props.imgUrlList.map((item) => (
                        <div className='hotel-brief-con' key={item._id}>
                            <DivBackImage imgSrc={item.Path} />
                        </div>
                    ))
                }
            </Slider>
        );
    }
}

export default HotelDetailImage;