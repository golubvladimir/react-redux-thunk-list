import React from 'react';
import { connect } from 'react-redux';

const Track = ({ track }) => {
    return (
        <div>{ track.name }</div>
)
};

const mapStateToProps = (state, ownProps) => {
    return {
        track: state.tracks.find(track => track.id === Number(ownProps.match.params.id))
    }
};

export default connect(mapStateToProps)(Track);