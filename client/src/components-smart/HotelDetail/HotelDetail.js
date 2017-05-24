import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Classnames from 'classnames';
require('./hotel-detail.less');


class HotelDetail extends Component {
    constructor(props) {
        debugger;
        super(props);
        
        //this.props.dispatch(gethotel());
    }
    render() {
        return (
        <hotel-detail class={Classnames(this.props.className)}>
              <Card className='detail-div'>
                <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
                <img src="./src/assets/images/hotelImages/hotel.image4.jpg" />
                </CardMedia>
                
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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