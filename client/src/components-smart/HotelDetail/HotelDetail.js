import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

require('./hotel-detail.less');


class HotelDetail extends Component {
    constructor(props) {
        debugger;
        super(props);
        let a=this.props.location.state.from.search;
        //this.props.dispatch(gethotel());
    }
    render() {
        return (
              <Card>
                <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar="./src/assets/images/hotelImages/hotel.image4.jpg"
                />
                <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
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
        );
    }
}

export default HotelDetail;