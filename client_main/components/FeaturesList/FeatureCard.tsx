import { features } from "@/public/slideData/data";
import React from "react";

const FeatureCard: React.FC = () => {
  return (
    <div>
      <h2 className="text-5xl font-sans font-bold mb-8 text-green-800 heading text-center">Our Features</h2>
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 p-8 ${
            feature.id % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2 p-4">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={feature.image}
                alt="featureImage"
                className={`${feature.id % 2 === 1 ? "ml-32" : ""} w-[400px] h-[300px] rounded-lg`}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 text-left">
            <h2 className="text-3xl font-sans font-bold mb-4 text-green-800 heading text-center">
              {feature.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify font-sans">
              {feature.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
