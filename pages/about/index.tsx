import Image from "next/image";
import React from "react";

const imagesArray = [
  "https://cdn.shopify.com/s/files/1/0551/9242/0441/files/Screen_Shot_2021-07-26_at_9.55_2_1420x_37337844-84ad-4c3b-97de-6e6821dde246_1420x.png?v=1642620619",
  "https://cdn.shopify.com/s/files/1/0551/9242/0441/files/Screen_Shot_2021-06-10_at_1.04_17_1420x_54862fc8-048f-4227-8f0a-aa9cacade5db_1420x.png?v=1642620682",
  "https://cdn.shopify.com/s/files/1/0551/9242/0441/files/Screen_Shot_2021-06-10_at_1.07_1420x_c8bb7818-f914-4f44-90d9-cdec7c3f1a69_1420x.png?v=1642620705",
];

const About = () => {
  return (
    <section className="px-8 my-8 ">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {imagesArray.map((image, i) => (
          <div
            className="w-full h-[300px] bg-gray-100 flex items-center justify-center "
            key={i + image}
          >
            {/* <img
              src={image}
              alt="about images"
              className="w-[90%] h-[90%]"
              loading="lazy"
            /> */}
          </div>
        ))}
      </div>
      <div className="md:max-w-[70%] md:mx-auto  lg:text-center lg:min-h-[70vh] md:grid place-content-center gap-2">
        <h2 className="text-3xl font-bold my-8">About</h2>
        <p className="text-[16px] text-gray-500  my-5">
          Mlouye founder and creative director Meb Rure hails from an industrial
          design background. In 2015, Meb decided to change gears and turn her
          energy towards Mlouye, a collection of exceptional handbags. Focusing
          on quality material, good design, craftsmanship and sustainability,
          Mlouye reflects the epitome of quality over quantity.
        </p>
        <p className="text-[16px] text-gray-500  my-5">
          Meb was highly inspired by the Bauhaus Movement artists and
          architects. From Mies van der Rohe works to Kandinsky paintings, to
          Aalto furniture, she acquired a rationalist vision of design by
          gleaning how they served a utilitarian purpose in a cleverly simple
          way. Mlouye merges industrial design and fashion, creating functional
          handbags made of luxurious and honest materials to improve people
          lives in small but important ways.
        </p>

        <div className="bg-gray-200 px-4 py-2">
          <h3 className="text-2xl">Our quality promise</h3>
          <p className="text-[16px] text-gray-500  my-3">
            Quality is never an accident. It is always the result of intelligent
            effort. We spend most of our time and energy for good design and to
            achieve high quality. Every single detail from material to technique
            is thought through with obsessive attention. If our product doesn
            not satisfy you, we will take it back.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
