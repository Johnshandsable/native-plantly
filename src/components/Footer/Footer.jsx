import React from 'react';
import './Footer.css';

import Typography from '@material-ui/core/Typography';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          {/* <a href="#">
                <i class="icon ion-social-github"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-linkedin"></i>
              </a> */}
          <Typography variant="body2" color="textSecondary" component="p">
            Built using NatureServe Data. 2021. NatureServe, Arlington,
            Virginia. Source:{' '}
            <a href="https://explorer.natureserve.org/">
              explorer.natureserve.org/
            </a>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Built using Trefle Data. 2021. Trefle.io/, Source:{' '}
            <a href="https://trefle.io/">trefle.io/</a>
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p">
          John Shands © 2021
        </Typography>
      </footer>
    </div>
  );
}

export default Footer;
