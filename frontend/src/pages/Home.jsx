import React from "react";
import HeroSection from "../components/home/HeroSection";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
// import { useEffect } from "react";
// import { testBackend } from "../services/api";

function Home() {
  // useEffect(() => {
  //     testBackend()
  //     .then((data) => console.log(data))
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div>
      <HeroSection />
      <Features />
      <HowItWorks />
    </div>
  );
}

export default Home;
