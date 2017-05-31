import React, { Component } from 'react';
import { GridTile } from 'material-ui';
import Classnames from 'classnames';
import DivBackImage from 'components-dumb/DivBackImage/DivBackImage'

require('./hotel-detail-image.less');

class HotelDetailImage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <hotel-img class={Classnames(this.props.className)}>
                <div className='img'>
                    <GridTile
                        title={this.props.title}
                        subtitle={this.props.subtitle}>
                        <DivBackImage imgSrc={this.props.img} />
                    </GridTile>
                </div>
            </hotel-img>
        );
    }
}

export default HotelDetailImage;