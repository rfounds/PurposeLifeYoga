import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
        <div className="title-style-one">
          <h2 style={{ color: '#4a5568', fontFamily: '"Playfair Display", serif' }}>
            <span style={{ color: '#805ad5' }}>Our Story</span>
          </h2>
        </div>
        {/* /.title-style-one */}
        <div className="text-wrapper">
          <p className="sub-text" style={{ color: '#718096', lineHeight: '1.8' }}>
            purPOSE Life Yoga was born from a journey—not just of movement, but of transformation. Founded by a Navy veteran turned yogi, this space honors every step it took to remember what was never missing: purpose.
          </p>
          <p className="sub-text" style={{ color: '#718096', lineHeight: '1.8' }}>
            Here, yoga is more than a pose. It's a way of living—grounded in authenticity, guided by breath, and open to growth.
          </p>
          <p className="sub-text" style={{ color: '#718096', lineHeight: '1.8' }}>
            Whether you're here to move, to heal, or to reconnect, you're invited to come just as you are. This is a community of real people, living real lives, with real purpose.
          </p>
          <Link href="/about" className="theme-btn-eight ripple-btn" style={{ backgroundColor: '#805ad5', color: 'white', borderRadius: '4px' }}>
            Learn More About Us
          </Link>
        </div>
      </div>

      <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
        <div className="img-holder md-mt-80">
          <Image width="646" height="517"
            src="/images/media/yoga-meditation.jpg"
            alt="Yoga Meditation"
            className="w-100"
            style={{ borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
          />
          <Image width="170" height="170"
            src="/images/shape/104.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <div className="shapes shape-two"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
