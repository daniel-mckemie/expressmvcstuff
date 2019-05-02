import React from 'react';
import DefaultLayout from './DefaultLayout';


export default ({ user, times }) => (
  <DefaultLayout title="Logged in!" user={user}>
    <div>
      You're logged in, { user.fname }!
      <p>You've been here { times } times in this session!</p>
      <p className="buttons">
        <a className="button is-info" href="/colors/faves">
          <span className="icon is-small">
            <i className="fas fa-heart"></i>
          </span>
          <span>My Favorites</span>
        </a>
      </p>
    </div>
  </DefaultLayout>
);
