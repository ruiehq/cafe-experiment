import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.scss';

const IndexPage = () => {
  return (
    <>
			<Head>
				<title>Cafe Mediterranean Redesign</title>
				<meta name="description" content="The new design of Cafe Mediterranean" />
			</Head>
			<Header />
      <section className="hero">
        <img
          className="hero-logo"
          src="/static/images/cafe-logo.png"
        />
        <p className="hero-content">
          The Mediterranean lifestyle is all about enjoying life to the fullest
          – through fresh, healthy meals with family and friends, finding a
          balance between work, relaxation, and experiencing the pleasures of an
          active life.
        </p>
        <div className="hero-action">
          <img src="/static/images/shell.png" />
          <h3>Reservations</h3>
          <p>
            CALL (02) 720-8757 OR <a href="#">BOOK ONLINE</a>
          </p>
        </div>
      </section>
      <section className="about">
        <div className="about-container">
          <div className="about-circle">
            <h3>THE RESTAURANT</h3>
            <p>
              In 1994, two siblings, Gonzalo and Giovanna Mabanta, along with
              Gonzalo’s then sister-in-law Marla Moran, put their heart, their
              soul, and their passion for good food and cooking into a
              restaurant idea that, in those heady days of the 1990s, was still
              unknown in Manila: a kitchen dedicated to the distinctive cuisines
              of the sunny Mediterranean.
            </p>
            <a className="round-btn">Learn More</a>
          </div>
        </div>
      </section>
      <section className="more">
        <div className="two-columns">
          <div className="left">
            <h3>TESTIMONIALS</h3>
            <p>My husband loves it so much, he couldn’t share his opinion, he was savoring every bite</p>
            <p className="tagline">- Carlomar Frilles</p>
          </div>
          <div className="right">
            <img src="https://images.pexels.com/photos/5876/food-salad-healthy-vegetables.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=2400" />
          </div>
        </div>
        <div className="two-columns">
          <div className="left">
            <h3>TESTIMONIALS</h3>
            <p>
              Service crew were courteous and eating in your place makes me feel
              I’m in a country in Mediterranean.
            </p>
            <p className="tagline">- Camille</p>
          </div>
          <div className="right">
            <img src="https://images.pexels.com/photos/2122280/pexels-photo-2122280.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=1500" />
          </div>
        </div>
      </section>
			<Footer />
    </>
  );
};

export default IndexPage;
