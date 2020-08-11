import React from 'react';
import './css/style.css';
import './css/styles.css';
import logoWhite from './img/logo-white.png'
/* import logo from './img/logo.png'
 */
import nat_1 from './img/nat-1-large.jpg'
import nat_2 from './img/nat-2-large.jpg'
import nat_3 from './img/nat-3-large.jpg'

function App() {
  return (
    <div className="App">

      <header className='header'>
        <div className='logo-box'>
          <img src= {logoWhite} alt='logo' className='logo'></img>
        </div>

        <div className='text-box'>
          <h1 className='heading-primary'>
              <span className='heading-primary-main'>outdoors</span>
              <span className='heading-primary-sub'>is where life happens</span>
          </h1>

          <a href='#' className='btn btn-white btn-animated'>Discovery  our tours</a>
        </div>
      </header>

      <main>
        <section className='section-about'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>
              Exciting tours for adventurous people
            </h2>
          </div>

          <div className='row'>
            <div className="col-1-of-2">

              <h3  className="heading-tertiary u-margin-bottom-small">
                You're going to fall in love with nature
              </h3>

              <p className="paragraphy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec elementum lorem, vitae semper quam. Integer faucibus iaculis mauris at rhoncus. Duis ullamcorper porta odio eget porta. Vivamus aliquet a quam eu rutrum.
              </p>

              <h3  className="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>

              <p className="paragraphy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec elementum lorem, vitae semper quam. Integer faucibus iaculis mauris at rhoncus. Duis ullamcorper porta odio eget porta. Vivamus aliquet a quam eu rutrum. Praesent id neque et diam finibus fermentum et in leo. Nunc ut arcu ex. 
              </p>

              <a href='#' className='btn-text'>Learn more &rarr;</a>

            </div>
            <div className="col-1-of-2">
              <div className='composition'>
                <img src={nat_1} alt='img1' className='composition__photo composition__photo--p1'></img>
                <img src={nat_2} alt='img2' className='composition__photo composition__photo--p2'></img>
                <img src={nat_3} alt='img3' className='composition__photo composition__photo--p3'></img>
              </div>
            </div>
        </div>
        </section>

        <section className='section-features'>
          <div className='row'>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-world'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>Explore the world</h3>
                <p className='feature-box__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec elementum lorem, vitae semper quam.</p>
              </div>
            </div>

            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-compass'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>Meet nature</h3>
                <p className='feature-box__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec elementum lorem, vitae semper quam.</p>
              </div>
            </div>

            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-map'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>Find Your way</h3>
                <p className='feature-box__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec elementum lorem, vitae semper quam.</p>
              </div>
            </div>

            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-heart'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>Life a healthier life</h3>
                <p className='feature-box__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec elementum lorem, vitae semper quam.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='section-tours'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>
              most popular tours
            </h2>
            </div>

            <div className='row'>
              <div className="col-1-of-3">
                <div className='card'>
                  <div className='card__side card__side--front'>
                    
                    <div className="card__picture card__picture--1">
                      &nbsp;
                    </div>

                    <div className='card_heading'>
                      HEADING
                    </div>

                    <div className='card_details'>
                      DETAILS
                    </div>

                  </div>
                  <div className='card__side card__side--back card__side--back-1'>
                    Back
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                col-1-of-3
              </div>
              <div className="col-1-of-3">
                col-1-of-3
              </div>
            </div>
        </section>

      </main>

      {/* <section className='grid-test'>

        <div className='row'>
          <div className="col-1-of-2">
            col-1-of-2
          </div>
          <div className="col-1-of-2">
            col-1-of-2
          </div>
        </div>

        <div className='row'>
          <div className="col-1-of-3">
            col-1-of-3
          </div>
          <div className="col-1-of-3">
            col-1-of-3
          </div>
          <div className="col-1-of-3">
            col-1-of-3
          </div>
        </div>

        <div className='row'>
          <div className="col-1-of-3">
            col-1-of-3
          </div>
          <div className="col-2-of-3">
            col-2-of-3
          </div>
        </div>

        <div className='row'>
          <div className="col-1-of-4">
            col-1-of-4
          </div>
          <div className="col-1-of-4">
            col-1-of-4
          </div>
          <div className="col-1-of-4">
            col-1-of-4
          </div>
          <div className="col-1-of-4">
            col-1-of-4
          </div>
        </div>

        <div className='row'>
          <div className="col-1-of-4">
            col-1-of-4
          </div>
          <div className="col-1-of-4">
            col-1-of-4
          </div>
          <div className="col-2-of-4">
            col-2-of-4
          </div>
        </div>

        <div className='row'>
          <div className="col-1-of-4">
            col-1-of-4
          </div>
          <div className="col-3-of-4">
            col-3-of-4
          </div>
        </div>
      </section> */}

      
    </div>
  );
}

export default App;
