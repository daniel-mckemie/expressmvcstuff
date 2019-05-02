import React from 'react';
import DefaultLayout from './DefaultLayout';

export default ({ name, user }) => (
  <DefaultLayout title="hey Jason" user={user}>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Hi There!</h3>
            <p className="subtitle has-text-grey">Please log in to proceed.</p>
            <div className="box">
              <form method="POST" action="/auth/login">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="email"
                      placeholder="Your Email"
                      name="email"
                    />
                  </div>
                </div>

                <div className="field disabled">
                  <div className="control">
                    <input
                      className="input is-large disabled"
                      type="password"
                      placeholder="Your Password"
                      name="password"
                    />
                  </div>
                </div>

                <input
                  type="submit"
                  className="button is-block is-info is-large is-fullwidth"
                  value="Login"
                />
              </form>
            </div>
            <p className="has-text-grey">
              <a href="../">Sign Up</a>
              {' '}
&nbsp;·&nbsp;
              <a href="../">Forgot Password</a>
              {' '}
&nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
);
