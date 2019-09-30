import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTracks } from "../actions/tracks";

class App extends Component {

    addTrack = () => {
        this.props.onAddTrack(this._input.value);
        this._input.value = '';
    };

    findTrack = () => {
        this.props.onFindTrack(this._inputSearch.value);
    };

    render() {
        return (
            <div className="container">
                <div>
                    <input type="text" ref={ref => this._input = ref}/>
                    <button onClick={this.addTrack}>Add track</button>
                </div>
                <div>
                    <input type="text" ref={ref => this._inputSearch = ref}/>
                    <button onClick={this.findTrack}>Find track</button>
                </div>
                <div>
                    <button onClick={this.props.onGetTracks}>Get tracks</button>
                </div>
                <ul>
                    {
                        this.props.tracks.map((track, index) =>
                            <li key={index}>
                                <Link to={`/tracks/${ track.id }`}>{ track.name }</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
        ownProps
    }),
    dispatch => ({
        onAddTrack: name => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({type: 'ADD_TRACK', payload})
        },
        onFindTrack: name => {
            dispatch({type: 'FIND_TRACK', payload: name})
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);
