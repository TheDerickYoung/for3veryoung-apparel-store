import React, { useState, useEffect } from "react";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "TOPS",
      imageUrl: "https://i.ibb.co/SP08P4c/IMG-9317.jpg",
    },
    {
      id: 2,
      title: "BOTTOMS",
      imageUrl: "https://i.ibb.co/DLZH44t/IMG-9318.jpg",
    },
    {
      id: 3,
      title: "ACCESSORIES",
      imageUrl: "https://i.ibb.co/Pt8C75Z/IMG-9315.jpg",
    },
    {
      id: 4,
      title: "MENS",
      imageUrl: "https://i.ibb.co/rc8Pj1G/IMG-90-A76-A87-C1-A0-1.jpg",
    },
    {
      id: 5,
      title: "WOMENS",
      imageUrl: "https://i.ibb.co/2cPL8Kd/IMG-C287949533-A3-1.jpg",
    },
  ];

  return (
    <>
      <Directory categories={categories} />
    </>
  );
};

export default Home;
