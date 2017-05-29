import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class HotelDetailImage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <CardMedia
                    overlay={<CardTitle 
                    title={this.props.title}
                    subtitle={this.props.subtitle}/>}>
                <img src={this.props.img} />
                </CardMedia>
            </div>
        );
    }
}

export default HotelDetailImage;