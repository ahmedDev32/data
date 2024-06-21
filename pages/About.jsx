import Footer from '@/components/footer'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "John Doe",
    feedback: "Aziibella provides the best surgical instruments. Their quality and precision are unmatched.",
    image: "data:image/jpeg;base64,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",
    rating: 5
  },
  {
    name: "Jane Smith",
    feedback: "We have been using Aziibella's products for years. They never disappoint!",
    image: "https://t3.ftcdn.net/jpg/01/94/52/52/240_F_194525205_HzyzPGx0tM7AKM4GnThXRHcanV4YRrgZ.jpg",
    rating: 4
  },
  {
    name: "Mike Johnson",
    feedback: "Excellent customer service and top-notch quality. Highly recommend Aziibella.",
    image: "https://t4.ftcdn.net/jpg/01/96/53/53/240_F_196535326_RcQ5bNXuvOsvDqfqqPbFASX2pPRCyivF.jpg",
    rating: 5
  },
  {
    name: "Emily Davis",
    feedback: "Reliable and efficient tools. Aziibella is our go-to for surgical instruments.",
    image: "data:image/jpeg;base64,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",
    rating: 5
  },
  {
    name: "Robert Wilson",
    feedback: "High-quality products and great customer support. Very satisfied.",
    image: "https://dailypost.ng/wp-content/uploads/2023/09/Umoh-Michael-e1695217670244.jpeg",
    rating: 4
  },
  {
    name: "Linda Brown",
    feedback: "Aziibella's instruments are the best in the market. Highly recommended!",
    image: "data:image/jpeg;base64,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",
    rating: 5
  },
  {
    name: "Steven Miller",
    feedback: "Exceptional quality and precision. Our surgical team loves them.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOBXL9b9nNiH4tkEbXUdKpw0VQ8aejzHNmTw&s",
    rating: 5
  },
  {
    name: "Jessica Taylor",
    feedback: "Great value for money. Aziibella never disappoints.",
    image: "data:image/jpeg;base64,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",
    rating: 4
  },
  {
    name: "David Anderson",
    feedback: "Top-notch surgical instruments. Highly reliable.",
    image: "https://t3.ftcdn.net/jpg/01/50/17/76/240_F_150177678_tTiXG1WOwVinmD6IvpFfySqDKyNETyvD.jpg",
    rating: 5
  },
  {
    name: "Sophia Moore",
    feedback: "Fantastic products and customer service. Will buy again.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqFLEDoznz72NLHHx9OmnwGZty1AGE2inKw&s",
    rating: 5
  },
  {
    name: "Daniel Thompson",
    feedback: "Aziibella always delivers quality products. Highly recommend them.",
    image: "https://as1.ftcdn.net/v2/jpg/03/15/23/00/1000_F_315230089_EaqZDrKcN8BkxjPMOzG1Io6Evx9ajzzn.jpg",
    rating: 5
  }
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Clients Reviews</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="text-lg text-gray-700 mb-4">"{testimonial.feedback}"</p>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-800 font-semibold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <>
     <section className="relative">
        <img 
          src="/images/about.jpg" 
          alt="About Us Background" 
          className="w-1200 h-200"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-5xl font-bold text-white">About Us</h2>
        </div>
      </section>
    <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h2 className="text-4xl font-bold text-gray-800">Aziibella</h2>
          <p className="mt-4 text-lg text-gray-700">


Welcome to Aziibella, your trusted partner in surgical instruments. With over 4 years of dedicated experience in crafting high-quality surgical products, we pride ourselves on delivering precision and excellence in every instrument we create. At Aziibella, we understand the pivotal role surgical instruments play in healthcare, which is why we ensure each product meets the highest standards of reliability and efficiency.

What sets us apart is our commitment to innovation and customer satisfaction. We continually refine and enhance our product line to meet the evolving needs of the medical community. Whether you require standard instruments or custom-designed solutions, Aziibella offers over 50 specialized products tailored to meet your exact specifications.

Choose Aziibella for your surgical instrument needs and discover the difference in quality and service. Join countless healthcare professionals who rely on Aziibella for superior surgical tools backed by expertise and dedication.

--- 

This version integrates your original message with the additional detail about custom designs and product variety, emphasizing Aziibella's commitment to quality and innovation in the field of surgical instruments.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Our dedication to quality and customer satisfaction sets us apart in the industry. We continuously innovate and improve our products to meet the evolving needs of the medical community. Trust Aziibella for your surgical instrument needs and experience the difference in quality and service.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src="/images/s3.png" 
            alt="Dummy Image" 
            className="w-3/4 h-auto rounded-lg" 
          />
        </div>
      </div>
    </div>
  </section>
  <TestimonialSlider />
  <Footer/>
  </>

  )
}

export default About
