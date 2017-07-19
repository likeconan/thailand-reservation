import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import HotelOrderListItem from 'components-dumb/HotelOrderListItem/HotelOrderListItem'
import CommentDialog from 'components-smart/CommentDialog/CommentDialog'
import Classnames from 'classnames';
import { connect } from 'react-redux';
import { getMyApply } from 'actions/apply.action';

require('./hotel-detail-hotel-order.less');

@connect((store) => {
    return {
        myApplied: store.applyReducer.myApplied
    }
})
class HotelDetailHotelOrder extends Component {

    componentWillMount() {
        this.props.dispatch(getMyApply());
    }

    render() {
        const { myApplied } = this.props;

        return (
            <hotel-detail class={Classnames(this.props.className)}>
                <div className='hotel-info'>
                    <Grid>
                        {
                            this.props.roomList.map((room, key) => {
                                var ifApplied = myApplied.filter((val) => {
                                    return val.roomId == room._id
                                })[0]
                                return <HotelOrderListItem room={room} key={key} status={ifApplied ? ifApplied.status : ''} />
                            })
                        }
                    </Grid>
                </div>
                <CommentDialog />
            </hotel-detail>
        );
    }
}

export default HotelDetailHotelOrder;