import React, { Component } from 'react';

class HotelItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.data.name}</p>
            </div>
        );
    }
}

export default HotelItem;