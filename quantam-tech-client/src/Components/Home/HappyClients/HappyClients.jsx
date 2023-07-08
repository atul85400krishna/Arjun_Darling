import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HappyClients = () => {
  const clients = [
    {
      id: 1,
      image:
        "https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
      name: "John Doe",
      comment:
        "Exceptional web development and design services. SEO strategies boosted visibility and conversions. Thank you for your exceptional work!",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyn361mcfxr1TxFBXw0kM3tRNKpmmzoaNMjA&usqp=CAU",
      name: "Jane Smith",
      comment:
        "Highly recommend web development and design services. Stunning website and SEO optimizations resulted in increased visibility and conversions. Thrilled with the results!",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/originals/a2/de/39/a2de3954697c636276192afea0a6f661.jpg",
      name: "Michael Johnson",
      comment:
        "Exceptional web development and design services. Stunning website performance. SEO strategies boosted rankings and online presence. Couldn't be happier!",
    },
    {
      id: 4,
      image:
        "https://media.licdn.com/dms/image/C4D03AQErRqhfultaPQ/profile-displayphoto-shrink_800_800/0/1662312244141?e=2147483647&v=beta&t=zV4g45u2F-M-ZEP5-HdKEYfFYYfIoWm_aKGNyFWwLAE",
      name: "Emily Brown",
      comment:
        "Grateful for exceptional web development and design services. Perfectly aligned website with user-friendly interface. SEO optimizations improved rankings and visibility. Commendable expertise!",
    },
    {
      id: 5,
      image:
        "https://static.generated.photos/vue-static/face-generator/landing/wall/7.jpg",
      name: "David Wilson",
      comment:
        "Outstanding web development and design services. Increased organic traffic through SEO optimizations. Commendable attention to detail and professionalism. Strong online presence!",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZ",
      name: "Olivia Davis",
      comment:
        "Exceptional web development and design services. Perfect representation of my business. SEO optimizations boosted visibility and conversions. Hard work and dedication!",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Set the interval between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="happy-clients bg-gradient-to-r from-blue-300 to-blue-600 pb-52  pt-24 ">
      <h1 className="text-6xl font-semibold mb-24 text-white font-serif">
        Our Happy Clients
      </h1>
      <Slider {...settings}>
        {clients.map((client) => (
          <div
            className="client-card shadow-xl rounded-xl flex justify-center items-center bg-white "
            key={client.id}
          >
            <div className="client-image flex justify-center">
              <img
                className="  w-full h-96 object-center mt-9"
                src={client.image}
                alt={client.name}
              />
            </div>
            <div className="client-details flex justify-center flex-col">
              <h3 className="text-4xl font-semibold mt-10 text-gray-700">{client.name}</h3>
              <p className="text-gray-800 font-bold mt-5 mb-5 text-start p-4">
                "{client.comment}"
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HappyClients;
