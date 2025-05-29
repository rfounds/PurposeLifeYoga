import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroBannerFour = () => {
  return (
    <div className="hero-banner-four" style={{ backgroundColor: '#f5f0e8', minHeight: '100vh' }}>
      <Image width="213" height="86"
        src="/images/shape/100.svg"
        alt="shape"
        className="shapes shape-four"
      />
      <Image width="10" height="19"
        src="/images/shape/101.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <Image width="242" height="433"
        src="/images/shape/102.svg"
        alt="shape"
        className="shapes shape-six"
      />
      <Image width="246" height="400"
        src="/images/shape/103.svg"
        alt="shape"
        className="shapes shape-seven"
      />

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-last">
            <div className="illustration-holder">
              <Image
                src="/images/assets/yoga-pose.png"
                alt="Yoga Pose"
                className="illustration"
                width={600}
                height={600}
                style={{ objectFit: 'contain' }}
              />
              <Image  width="88" height="107"
                src="/images/assets/ils_14.3.svg"
                alt="shape"
                className="shapes shape-three"
              />
            </div>
            <p className="review-text">
              Over <span>150,000+ client</span> all over the world.
            </p>
          </div>
          {/* End .col */}

          <div className="col-xl-6 col-lg-6 order-lg-first">
            <div className="hero-text-wrapper">
              <h1 style={{ color: '#4a5568', fontFamily: '"Playfair Display", serif' }}>
                Welcome to <span style={{ color: '#805ad5', fontWeight: 'bold' }}>pur<span style={{ textTransform: 'uppercase' }}>POSE</span> Life Yoga</span>
              </h1>
              <h2 style={{ color: '#718096', fontWeight: 'normal', fontSize: '1.75rem', marginTop: '1rem' }}>
                You don't have purpose. You <span style={{ fontStyle: 'italic' }}>are</span> purpose.
              </h2>
              <p className="hero-sub-heading" style={{ color: '#718096', marginTop: '1.5rem' }}>
                Breathe into your being. Move with meaning. Live with heart.
              </p>
              <div className="d-flex flex-wrap mt-5 gap-3">
                <Link href="/classes" className="theme-btn-five icon-link" style={{ backgroundColor: '#805ad5', color: 'white', border: 'none' }}>
                  <span>Join a Class</span>
                </Link>
                <Link href="/about" className="theme-btn-five icon-link" style={{ backgroundColor: 'transparent', color: '#805ad5', border: '2px solid #805ad5' }}>
                  <span>Explore Our Story</span>
                </Link>
                <Link href="/contact" className="theme-btn-five icon-link" style={{ backgroundColor: 'transparent', color: '#4a5568', border: '2px solid #4a5568' }}>
                  <span>Stay Connected</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
  //  {/* /.hero-banner-four */}
};

export default HeroBannerFour;
