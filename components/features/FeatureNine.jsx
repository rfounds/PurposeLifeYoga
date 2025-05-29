import React from "react";
import Link from "next/link";
import Image from "next/image";

const ClassOfferings = [
  {
    icon: "yoga-hot",
    title: "Hot Yoga",
    subTitle: `Heat and flow combine to release tension and deepen your practice. Suitable for all levels.`,
    delayAnimation: "0",
  },
  {
    icon: "yoga-chakra",
    title: "Chakra Balancing Flow",
    subTitle: `Align your energy centers through mindful movement and breathwork.`,
    delayAnimation: "100",
  },
  {
    icon: "yoga-slow",
    title: "Slow Flow & Stillness",
    subTitle: `Gentle movements paired with extended holds to cultivate presence and peace.`,
    delayAnimation: "200",
  },
  {
    icon: "yoga-private",
    title: "Private Sessions",
    subTitle: `One-on-one guidance tailored to your unique needs and goals.`,
    delayAnimation: "300",
  },
  {
    icon: "yoga-outdoor",
    title: "Pop-up Classes",
    subTitle: `Outdoor sessions and special events that bring the community together.`,
    delayAnimation: "400",
  },
];

const FeatureNine = () => {
  return (
    <>
      <div className="title-style-one text-center mb-60 lg-mb-40">
        <h2 style={{ color: '#4a5568', fontFamily: '"Playfair Display", serif' }}>
          <span style={{ color: '#805ad5' }}>Flow With Us</span>
        </h2>
        <p className="sub-text" style={{ color: '#718096', maxWidth: '650px', margin: '0 auto', lineHeight: '1.8' }}>
          Our classes are designed for all levels, from beginners to lifelong practitioners. 
          Expect guided breathwork, thoughtful sequencing, and a space that welcomes every body.
        </p>
      </div>
      
      <div className="row justify-content-center">
        {ClassOfferings.map((val, i) => (
          <div
            className="col-lg-4 col-md-6 mb-4"
            data-aos="fade-up"
            data-aos-delay={val.delayAnimation}
            key={i}
          >
            <div className="block-style-twentyOne" style={{ backgroundColor: '#f8f4f0', borderRadius: '8px', height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <div className="icon" style={{ backgroundColor: '#805ad54d', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Image
                  src={`/images/icon/${val.icon}.svg`}
                  alt={val.title}
                  width={40}
                  height={40}
                />
              </div>
              <h4 style={{ color: '#4a5568', fontSize: '22px', marginBottom: '12px' }}>{val.title}</h4>
              <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '20px' }}>{val.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-4">
        <Link href="/classes" className="theme-btn-eight ripple-btn" style={{ backgroundColor: '#805ad5', color: 'white', borderRadius: '4px', display: 'inline-block', padding: '12px 30px', margin: '0 10px' }}>
          View Schedule
        </Link>
        <Link href="/book" className="theme-btn-eight ripple-btn" style={{ backgroundColor: 'transparent', color: '#805ad5', borderRadius: '4px', border: '2px solid #805ad5', display: 'inline-block', padding: '12px 30px', margin: '0 10px' }}>
          Book a Class
        </Link>
      </div>
    </>
  );
};

export default FeatureNine;
