import React from "react";
import Link from "next/link";
import HeroBannerFour from "../components/hero-banner/HeroBannerFour";
import About from "../components/about/About";
import FeatureNine from "../components/features/FeatureNine";
import TestimonialThree from "../components/testimonial/TestimonialThree";
import FaqOne from "../components/faq/FaqOne";
import CallToActionFour from "../components/call-to-action/CallToActionFour";
import FooterEight from "../components/footer/FooterEight";
import Image from "next/image";

export const metadata = {
  title: "purPOSE Life Yoga - Breathe into your being",
  description: `You don't have purpose. You are purpose. Breathe into your being. Move with meaning. Live with heart.`,
};

export default function PurposeLifeYoga() {
  return (
    <div className="main-page-wrapper p0 font-gordita" style={{ backgroundColor: '#f5f0e8' }}>
      {/* Hero Banner Section */}
      <HeroBannerFour />

      {/* About Us Section */}
      <div className="fancy-feature-ten pt-120 md-pt-80" id="about">
        <div className="container">
          <div className="block-wrapper">
            <About />
          </div>
        </div>
      </div>

      {/* Class Offerings Section */}
      <div className="fancy-feature-nine pt-120 md-pt-80" id="classes">
        <div className="container">
          <FeatureNine />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="client-feedback-slider-two pt-120 md-pt-80" id="testimonials">
        <div className="container">
          <div className="title-style-one text-center mb-60 lg-mb-40">
            <h2 style={{ color: '#4a5568', fontFamily: '"Playfair Display", serif' }}>
              <span style={{ color: '#805ad5' }}>Community Voices</span>
            </h2>
            <p className="sub-text" style={{ color: '#718096', maxWidth: '650px', margin: '0 auto', lineHeight: '1.8' }}>
              Hear from those who have found their purpose on the mat.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <TestimonialThree />
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="faqs-section-one pt-120 md-pt-80" id="faq">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-7 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-one text-center mb-60 lg-mb-40">
                <h2 style={{ color: '#4a5568', fontFamily: '"Playfair Display", serif' }}>
                  <span style={{ color: '#805ad5' }}>Common Questions</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 m-auto">
              <FaqOne />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="fancy-short-banner-five pt-120 md-pt-80" id="contact">
        <div className="container">
          <div className="bg-wrapper" style={{ backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <CallToActionFour />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="theme-footer-eight mt-100">
        <div className="container">
          <FooterEight />
        </div>
        <Image width="1600" height="600"
          src="/images/shape/214.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width="1600" height="600"
          src="/images/shape/215.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </footer>
    </div>
  );
}


