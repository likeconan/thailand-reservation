import React, { Component } from 'react';
import HotelList from 'components-smart/HotelList/HotelList'

class HotelPage extends Component {
    render() {
        return (
            <div>
                this is hotel page with hotel list
                <HotelList />
            </div>
        );
    }
}

export default HotelPage;