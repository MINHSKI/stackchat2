import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChannel } from '../store'

function submitHandler(event){
  this.props.postChannel(event.target.value)
}

const NewChannelEntry = (props) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" onSubmit={submitHandler} className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/

const mapDispatchToProps = (dispatch) => {
  return { newChannel: (channel) => dispatch(getChannel(channel)) }
}

const connectedChannel = connect(null, mapDispatchToProps)(NewChannelEntry);

export default connectedChannel;