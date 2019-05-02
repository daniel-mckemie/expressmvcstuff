import React from 'react';
import Nav from './Nav';

export default ({ title, children, ...props}) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
      <link rel="stylesheet" href="/css/styles.css" />
    </head>
    <body>
      <Nav {...props} />
      <section className="section">
        <div className="container">
          {children}
        </div>
      </section>
    </body>
  </html>
);
