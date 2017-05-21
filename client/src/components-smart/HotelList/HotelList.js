import React, { Component } from 'react';
import HotelItem from 'components-dumb/HotelItem/HotelItem';
import { connect } from 'react-redux';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { gethotel } from 'actions/hotel.action';

require('./hotel-list.less');

@connect((store) => {
    return {
        datalist: store.hotelReducer.hotels
    }
})
class HotelList extends Component {
    constructor(props) {
        debugger;
        super(props);
       this.datalist =  gethotel();
        let aa=0;
    }
    render() {
        const eles = this.props.data.map((val, key) => {
            return <HotelItem data={val} key={key} />
        })

        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            }
            };

            const tilesData = [
            {
                img: './src/assets/images/hotelImages/hotel.image1.jpg',
                title: 'Breakfast',
                author: 'jill111',
            },
            {
                img: './src/assets/images/hotelImages/hotel.image2.jpg',
                title: 'Tasty burger',
                author: 'pashminu',
            },
            {
                img: './src/assets/images/hotelImages/hotel.image3.jpg',
                title: 'Camera',
                author: 'Danson67',
            }
            ];

        return (
              <div>
                <GridList cols={5}>
                {tilesData.map((tile) => (
                    <GridTile
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span>by <b>{tile.author}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                    <img src={tile.img} />
                    </GridTile>
                ))}
                </GridList>
            </div>
        );
    }
}

export default HotelList;