import React from 'react';
import './css/style.css';
import './css/styles.css';
import logoWhite from './img/logo-white.png'
/* import logo from './img/logo.png'
 */
import nat_1 from './img/nat-1-large.jpg'
import nat_2 from './img/nat-2-large.jpg'
import nat_3 from './img/nat-3-large.jpg'
import nat_8 from './img/nat-8.jpg'
import nat_9 from './img/nat-9.jpg'
import video from './img/video.mp4'
import video2 from './img/video.webm'


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

          <a href='#' className='btn btn--white btn-animated'>Discovery  our tours</a>
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
                    <h4 className='card__heading'>
                      <span className='card__heading-span card__heading-span--1'> The sea Explorer </span>
                    </h4>

                    <div className='card__details'>
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>

                  </div>

                  <div className='card__side card__side--back card__side--back-1'>
                    <div className='card__cta'>
                      <div className='card__price-box'>
                          <p className='card__price-only'>Only</p>
                          <p className='card__price-value'>297</p>
                      </div>

                      <a href='#' className='btn btn--white btn-animated'>BOOK NOW</a>

                    </div>
                  </div>
                </div>
              </div>

            <div className="col-1-of-3">
                <div className='card'>
                  <div className='card__side card__side--front'>
                    
                    <div className="card__picture card__picture--2">
                      &nbsp;
                    </div>
                    <h4 className='card__heading'>
                      <span className='card__heading-span card__heading-span--2'> The sea Explorer </span>
                    </h4>

                    <div className='card__details'>
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>

                  </div>

                  <div className='card__side card__side--back card__side--back-2'>
                    <div className='card__cta'>
                      <div className='card__price-box'>
                          <p className='card__price-only'>Only</p>
                          <p className='card__price-value'>487</p>
                      </div>

                      <a href='#' className='btn btn--white btn-animated'>BOOK NOW</a>

                    </div>
                  </div>
                </div>
              </div>

            <div className="col-1-of-3">
                <div className='card'>
                  <div className='card__side card__side--front'>
                    
                    <div className="card__picture card__picture--3">
                      &nbsp;
                    </div>
                    <h4 className='card__heading'>
                      <span className='card__heading-span card__heading-span--3'> The sea Explorer </span>
                    </h4>

                    <div className='card__details'>
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>

                  </div>

                  <div className='card__side card__side--back card__side--back-3'>
                    <div className='card__cta'>
                      <div className='card__price-box'>
                          <p className='card__price-only'>Only</p>
                          <p className='card__price-value'>874</p>
                      </div>

                      <a href='#' className='btn btn--white btn-animated'>BOOK NOW</a>

                    </div>
                  </div>
                </div>
              </div>
            
            </div>

            <div className='u-center-text u-margin-top-huge'>
              <a href='#' className='btn btn--green'>Discovery  our tours</a>
            </div>

        </section>
        
        <section className='section-stories'>
          <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
              <source src={video} type='video/mp4'></source>
              <source src={video2} type='video/webm'></source>
            </video>
          </div>

          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>We make people genuile happy</h2>
          </div>

          <div className='row'>
            <div className='story'>
              <figure className='story__shape'>
                <img src={nat_8} alt='img' className='story__img' />

                <figcaption className='story__caption'>Maria Smith</figcaption>
              </figure>

              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>I had the best week ever with my family</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec elementum lorem, vitae semper quam. Integer faucibus iaculis mauris at rhoncus. Duis ullamcorper porta odio eget porta. Vivamus aliquet a quam eu rutrum.</p>

              </div>
            </div>
          </div>

          <div className='row'>
            <div className='story'>
              <figure className='story__shape'>
                <img src={nat_9} alt='img' className='story__img' />

                <figcaption className='story__caption'>John Smith</figcaption>
              </figure>

              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>I had the best week ever with my family</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec elementum lorem, vitae semper quam. Integer faucibus iaculis mauris at rhoncus. Duis ullamcorper porta odio eget porta. Vivamus aliquet a quam eu rutrum.</p>

              </div>
            </div>
          </div>

          <div className='u-center-text u-margin-top-huge'>
              <a href='#' className='btn-text'>Read all stories &rarr;</a>
          </div>
        </section>

      </main>

      <div className='popup'>
        <div className='popup__content'>
          POPUP
        </div>
      </div>

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
