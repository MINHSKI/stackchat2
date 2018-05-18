import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Channel = props => {
  const channel = props.channel
  const messages = props.messages
  return (
    <li>
      <NavLink to={`/channels/${channel.id}`} activeClassName="active">
        <span># {channel.name}</span>
        <span className="badge">
          {messages.filter(message => message.channelId === channel.id).length}
        </span>
      </NavLink>
    </li>
  );
};

export default Channel
