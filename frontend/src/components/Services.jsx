import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/birth.avif",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/aniversi.avif",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/camp.avif",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "/nightgaem.webp",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "/part.webp",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/wedding.webp",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
