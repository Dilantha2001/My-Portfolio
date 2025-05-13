import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="I design modern, responsive websites that are visually appealing and user-friendly."
          icon={<FaGlobe />}
        />
        <Card
          title="Ui Design"
          des="I craft intuitive user interfaces that enhance user experience through clean layouts and smart interactions."
          icon={<SiAntdesign />}
        />

        <Card
          title="Mobile Development"
          des="I develop high-performance mobile applications optimized for both Android and iOS platforms."
          icon={<FaMobile />}
        />
      </div>
    </section>
  );
};

export default Features;
