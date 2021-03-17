import React from 'react';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 item social">
              {/* <a href="#">
                <i class="icon ion-social-github"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-linkedin"></i>
              </a> */}
              <p className="copyright">John Shands © 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
