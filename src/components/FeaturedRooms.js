import React, { Component } from 'react';
import {RoomContext} from '../Context';
import Loading from './Loading'


export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const {} = this.context;

        return (
            <div>
                <Loading />
            </div>
        )
    }
}
