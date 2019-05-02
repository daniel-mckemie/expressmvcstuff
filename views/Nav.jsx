import React from 'react';
import PropTypes from 'prop-types';


const Nav = ({ user={} }) => (
  <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <i className="fa fa-palette fa-fw fa-2x" />
        My Favorite Things
      </a>

    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" role="menuitem" href="/">
            Home
        </a>
        <a className="navbar-item" role="menuitem" href="/colors">
            Colors
        </a>
      </div>

      <div className="navbar-end">
        { (user.fname)
          ? (
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link" role="menuitem">
                <i className="fas fa-user fa-fw" />
                {user.fname}
              </div>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="/profile">Profile</a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/auth/login?_method=DELETE">Logout</a>
              </div>
            </div>
          ) : (
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-dark" href="/auth/login">
                    <span className="icon">
                      <i className="fas fa-sign-in-alt" />
                    </span>
                    <span>Log In</span>
                  </a>
                </p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  </nav>

);


export default Nav;
